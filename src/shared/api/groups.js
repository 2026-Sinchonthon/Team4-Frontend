import { apiRequest } from './client.js'

function queryString(params = {}) {
  const query = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (
      value !== undefined &&
      value !== null &&
      value !== '' &&
      value !== 'all'
    ) {
      query.set(key, value)
    }
  })

  const value = query.toString()
  return value ? `?${value}` : ''
}

export const groupsApi = {
  list(params) {
    return apiRequest(`/api/groups${queryString(params)}`)
  },

  get(groupId) {
    return apiRequest(`/api/groups/${groupId}`)
  },

  create(payload) {
    return apiRequest('/api/groups', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
  },

  update(groupId, payload) {
    return apiRequest(`/api/groups/${groupId}`, {
      method: 'PATCH',
      body: JSON.stringify(payload),
    })
  },

  join(groupId) {
    return apiRequest(`/api/groups/${groupId}/join`, {
      method: 'POST',
    })
  },

  leave(groupId) {
    return apiRequest(`/api/groups/${groupId}/join`, {
      method: 'DELETE',
    })
  },

  members(groupId) {
    return apiRequest(`/api/groups/${groupId}/members`)
  },

  pendingMembers(groupId) {
    return apiRequest(`/api/groups/${groupId}/members/pending`)
  },

  approve(groupId, memberId) {
    return apiRequest(
      `/api/groups/${groupId}/members/${memberId}/approve`,
      { method: 'PATCH' }
    )
  },

  reject(groupId, memberId) {
    return apiRequest(
      `/api/groups/${groupId}/members/${memberId}/reject`,
      { method: 'PATCH' }
    )
  },

  categories() {
    return apiRequest('/api/group-categories')
  },

  mine() {
    return apiRequest('/api/groups/me')
  },

  remove(groupId) {
    return apiRequest(`/api/groups/${groupId}`, {
      method: 'DELETE',
    })
  },
}