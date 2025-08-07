<template>
  <div class="dashboard">
    <div class="top">
      <h2 class="heading">Dashboard Overview</h2>
      <NuxtLink to="/" class="back-button">Back to Home</NuxtLink>
    </div>

    <div class="cards">
      <div class="card" v-for="item in stats" :key="item.label">
        <h3>{{ item.value }}</h3>
        <p>{{ item.label }}</p>
      </div>
    </div>

    <div class="chart-section">
      <VisitorsChart :data="visitorsData" />
    </div>
  </div>
</template>

<script setup>
import VisitorsChart from '~/components/charts/VisitorsChart.vue'
import { useDashboardStore } from '../../stores/dashboard'
import { storeToRefs } from 'pinia'

const dashboardStore = useDashboardStore()
const { stats, visitorsData } = storeToRefs(dashboardStore)

await dashboardStore.fetchDashboardData()
</script>

<style scoped>
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.back-button {
  background-color: #1e40af;
  color: white;
  border: none;
  padding: 10px 12px;
  font-size: 13px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

.dashboard {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.heading {
  font-size: 1.5rem;
  font-weight: 600;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.card {
  background-color: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.chart-section {
  background: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}
</style>
