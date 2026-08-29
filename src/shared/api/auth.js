import { apiRequest, setAccessToken } from './client.js'

export const authApi = {
  signup(payload) { return apiRequest('/api/auth/signup', { method: 'POST', body: JSON.stringify(payload) }) },
  async login(payload) {
    const result = await apiRequest('/api/auth/login', { method: 'POST', body: JSON.stringify(payload) })
    setAccessToken(result.accessToken)
    return result
  },
  me() { return apiRequest('/api/users/me') },
  logout() { setAccessToken(null) },
}
