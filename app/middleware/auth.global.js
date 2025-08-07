// app/middleware/auth.global.js
export default defineNuxtRouteMiddleware((to) => {
  const isLoggedIn = true // Replace with real logic later
  if (!isLoggedIn && to.path !== '/') {
    return navigateTo('/')
  }
})
