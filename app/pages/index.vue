<!-- app/pages/index.vue -->
<template>
  <div class="login-container">
    <form class="login-form" @submit.prevent="login">
      <h1>Login to DashPilot</h1>
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')

function login() {
  // Mock login: set a cookie or use Pinia in real app
  if (username.value && password.value) {
    router.push('/dashboard')
  }
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  background-color: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
}

.login-form input {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
}

.login-form button {
  padding: 0.5rem;
  background-color: #1e40af;
  color: white;
  border-radius: 4px;
}
</style>
