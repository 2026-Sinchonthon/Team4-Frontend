import { apiRequest } from './client.js'

export const contentApi = {
  home() { return apiRequest('/api/home') },
  feed(page = 0, size = 20) { return apiRequest(`/api/feed?page=${page}&size=${size}`) },
  portfolios() { return apiRequest('/api/portfolios/me') },
  createPortfolio(payload) { return apiRequest('/api/portfolios', { method: 'POST', body: JSON.stringify(payload) }) },
  updatePortfolio(id, payload) { return apiRequest(`/api/portfolios/${id}`, { method: 'PATCH', body: JSON.stringify(payload) }) },
  deletePortfolio(id) { return apiRequest(`/api/portfolios/${id}`, { method: 'DELETE' }) },
}
