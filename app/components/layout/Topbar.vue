<template>
  <header class="top-bar">
    <button class="menu-btn" @click="$emit('toggle-sidebar')">☰</button>
    <div class="top-bar-right">
      <div class="cart">
        🛒 <span class="badge">{{ cartCount }}</span>
      </div>
      <button class="logout-btn" @click="$emit('logout')">Logout</button>
    </div>
  </header>
</template>

<script setup>
import { useDashboardStore } from '../../../stores/dashboard'
import { computed } from 'vue'

const dashboardStore = useDashboardStore()
const cartCount = computed(() => dashboardStore.cartCount)
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e293b;
  color: white;
  padding: 10px 20px;
}

.menu-btn {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.top-bar-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.cart {
  position: relative;
}

.badge {
  background-color: red;
  color: white;
  border-radius: 12px;
  padding: 2px 8px;
  font-size: 12px;
  margin-left: 5px;
}

.logout-btn {
  background-color: #ef4444;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
