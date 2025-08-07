<template>
  <aside class="sidebar">
    <h2 class="title">Dashboard</h2>
    <nav>
      <ul class="nav-list">
        <li><NuxtLink to="/dashboard">Home</NuxtLink></li>
        <li><NuxtLink to="/dashboard/analytics">Analytics</NuxtLink></li>
        <li><NuxtLink to="/dashboard/settings">Settings</NuxtLink></li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
// No logic needed here for now
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #1e293b;
  color: white;
  height: 100vh;
  padding: 20px;
}

.title {
  font-size: 20px;
  margin-bottom: 30px;
}

.nav-list {
  list-style: none;
  padding: 0;
}

.nav-list li {
  margin-bottom: 15px;
}

.nav-list a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.nav-list a:hover {
  text-decoration: underline;
}
</style>
