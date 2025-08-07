// composables/useAuth.js
import { useRouter } from 'vue-router'

export default function useAuth() {
  const router = useRouter()

  const isLoggedIn = () => {
    return !!localStorage.getItem('token')
  }

  const login = (token) => {
    localStorage.setItem('token', token)
  }

  const logout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  return { isLoggedIn, login, logout }
}
