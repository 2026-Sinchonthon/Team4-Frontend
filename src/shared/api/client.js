const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? 'http://43.203.7.238:8080').replace(/\/$/, '')

export class ApiError extends Error {
  constructor(message, status, data) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
  }
}

function getAccessToken() {
  return localStorage.getItem('accessToken')
}

export function setAccessToken(token) {
  if (token) localStorage.setItem('accessToken', token)
  else localStorage.removeItem('accessToken')
}

export function unwrapResponse(response) {
  if (response && typeof response === 'object' && 'success' in response) {
    if (!response.success) throw new ApiError(response.message || '요청에 실패했습니다.', response.code, response)
    return response.data
  }
  return response
}

export async function apiRequest(path, options = {}) {
  const token = getAccessToken()
  const headers = new Headers(options.headers)

  headers.set('Accept', 'application/json')
  if (options.body && !(options.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json')
  }
  if (token) headers.set('Authorization', `Bearer ${token}`)

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  })

  const contentType = response.headers.get('content-type') ?? ''
  const data = response.status === 204
    ? null
    : contentType.includes('application/json')
      ? await response.json()
      : await response.text()

  if (!response.ok) {
    const message = data?.message ?? data?.error ?? `요청에 실패했습니다. (${response.status})`
    throw new ApiError(message, response.status, data)
  }

  return unwrapResponse(data)
}
