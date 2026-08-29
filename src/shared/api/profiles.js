import { apiRequest } from './client.js'

function withQuery(path, params = {}) {
  const query = new URLSearchParams(Object.entries(params).filter(([, value]) => value !== '' && value != null)).toString()
  return `${path}${query ? `?${query}` : ''}`
}

export const profilesApi = {
  skills() { return apiRequest('/api/skills') },
  create(payload) { return apiRequest('/api/profiles/me', { method: 'POST', body: JSON.stringify(payload) }) },
  me() { return apiRequest('/api/profiles/me') },
  update(payload) { return apiRequest('/api/profiles/me', { method: 'PATCH', body: JSON.stringify(payload) }) },
  networking(params) { return apiRequest(withQuery('/api/networking/profiles', params)) },
  networkingDetail(userId) { return apiRequest(`/api/networking/profiles/${userId}`) },
}
