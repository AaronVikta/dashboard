// stores/dashboard.js
import { defineStore } from 'pinia'

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    visitorTrend: [],
    stats: []
  }),

  actions: {
    async fetchDashboardData() {
      // Simulate an API call
      this.stats = [
        { label: 'Visitors', value: 240 },
        { label: 'Page Views', value: 130 },
        { label: 'Signups', value: 48 },
      ]

      this.visitorTrend = [
        { date: 'Aug 1', visitors: 20 },
        { date: 'Aug 2', visitors: 40 },
        { date: 'Aug 3', visitors: 35 },
        { date: 'Aug 4', visitors: 50 },
        { date: 'Aug 5', visitors: 45 },
      ]
    }
  }
})
