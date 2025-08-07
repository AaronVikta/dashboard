<!-- app/pages/settings.vue -->
<template>
  <div class="settings">
    <h2>User Settings</h2>
    <form @submit.prevent="update">
      <input type="text" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="New Password" />
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script setup>
const email = ref('')
const password = ref('')
function update() {
  alert('Settings saved!')
}
</script>

<style scoped>
.settings {
  background: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  max-width: 500px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

input {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
}

button {
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem;
  border-radius: 4px;
}
</style>
