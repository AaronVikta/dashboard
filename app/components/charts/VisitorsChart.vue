<script setup>
import { ref, onMounted, watch } from 'vue'
import { useDashboardStore } from './../../../stores/dashboard'
import { storeToRefs } from 'pinia'
import Chart from 'chart.js/auto'

const chartRef = ref(null)
const chartInstance = ref(null)

const dashboardStore = useDashboardStore()
const { visitorTrend } = storeToRefs(dashboardStore)

onMounted(() => {
  if (visitorTrend.value.length > 0) {
    renderChart()
  }
})

watch(visitorTrend, (newData) => {
  if (newData.length > 0) {
    if (chartInstance.value) chartInstance.value.destroy()
    renderChart()
  }
})

function renderChart() {
  chartInstance.value = new Chart(chartRef.value, {
    type: 'line',
    data: {
      labels: visitorTrend.value.map(d => d.date),
      datasets: [{
        label: 'Visitors',
        data: visitorTrend.value.map(d => d.visitors),
        borderColor: 'blue',
        backgroundColor: 'lightblue',
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  })
}
</script>

<template>
  <div class="visitors-chart">
    <canvas ref="chartRef" />
  </div>
</template>

<style scoped>
.visitors-chart {
  height: 300px;
  position: relative;
}
canvas {
  width: 100%;
  height: 100%;
}
</style>
