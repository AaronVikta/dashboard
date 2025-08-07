<!-- components/charts/DummyChart.vue -->
<template>
  <div class="chart">
    <h3>Visitor Trends</h3>
    <div class="bars">
      <div
        v-for="day in chartData"
        :key="day.label"
        class="bar"
        :style="{ height: day.value + 'px' }"
      >
        <span>{{ day.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const chartData = [
  { label: 'Mon', value: 40 },
  { label: 'Tue', value: 80 },
  { label: 'Wed', value: 60 },
  { label: 'Thu', value: 100 },
  { label: 'Fri', value: 90 },
  { label: 'Sat', value: 50 },
  { label: 'Sun', value: 70 }
]
</script>

<style scoped>
.chart {
  text-align: center;
}

.bars {
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  margin-top: 1rem;
  height: 120px;
}

.bar {
  flex: 1;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  border-radius: 4px;
  transition: height 0.3s;
}

.bar span {
  position: absolute;
  bottom: -1.5rem;
  font-size: 0.75rem;
}
</style>
