// stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: null
  }),
  actions: {
    login(token) {
      this.token = token
    },
    logout() {
      this.token = null
    }
  }
})
