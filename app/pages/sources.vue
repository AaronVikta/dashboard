<!-- app/pages/sources.vue -->
<template>
  <div class="sources">
    <h2>Traffic Sources</h2>
    <table>
      <thead>
        <tr>
          <th>Source</th>
          <th>Visitors</th>
          <th>Percentage</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="source in sources" :key="source.name">
          <td>{{ source.name }}</td>
          <td>{{ source.visitors }}</td>
          <td>{{ source.percent }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const sources = [
  { name: 'Google', visitors: 2100, percent: '52%' },
  { name: 'Facebook', visitors: 920, percent: '23%' },
  { name: 'Twitter', visitors: 540, percent: '13%' },
  { name: 'LinkedIn', visitors: 390, percent: '10%' }
]
</script>

<style scoped>
.sources {
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
