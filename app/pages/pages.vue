<!-- app/pages/pages.vue -->
<template>
  <div class="pages">
    <h2>Page Performance</h2>
    <table>
      <thead>
        <tr>
          <th>Page</th>
          <th>Views</th>
          <th>Avg. Time</th>
          <th>Bounce Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="page in pages" :key="page.url">
          <td>{{ page.url }}</td>
          <td>{{ page.views }}</td>
          <td>{{ page.avgTime }}</td>
          <td>{{ page.bounceRate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const pages = [
  { url: '/home', views: 3200, avgTime: '3:10', bounceRate: '45%' },
  { url: '/about', views: 1200, avgTime: '2:30', bounceRate: '33%' },
  { url: '/contact', views: 900, avgTime: '1:45', bounceRate: '60%' }
]
</script>

<style scoped>
.pages {
  background: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}
th,
td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}
</style>
