import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
})

// Centralised error handling — all API errors land here
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message ?? error.message ?? 'API error'
    return Promise.reject(new Error(message))
  }
)

export const apiGet = <T>(url: string): Promise<T> =>
  api.get<T>(url).then((r) => r.data)

export const apiPost = <T, B = unknown>(url: string, body?: B): Promise<T> =>
  api.post<T>(url, body).then((r) => r.data)

export const apiPut = <T, B = unknown>(url: string, body?: B): Promise<T> =>
  api.put<T>(url, body).then((r) => r.data)

export const apiDelete = <T = void>(url: string): Promise<T> =>
  api.delete<T>(url).then((r) => r.data)

export default api
