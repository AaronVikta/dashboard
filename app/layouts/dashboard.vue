<template>
  <div class="layout-container">
    <Sidebar :is-open="sidebarOpen" />
    <div class="main-content">
      <TopBar @toggle-sidebar="toggleSidebar" />
      <slot />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '~/components/layout/Sidebar.vue'
import TopBar from '~/components/layout/TopBar.vue'

import { ref } from 'vue'
const sidebarOpen = ref(true)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>

<style scoped>
.layout-container {
  display: flex;
}

.main-content {
  flex: 1;
  padding: 1rem;
}
</style>
