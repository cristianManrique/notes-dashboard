import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
})

// ─── Request interceptor ───────────────────────────────────────────────────
// Good place to inject auth tokens later (e.g. Authorization: Bearer ...)
api.interceptors.request.use((config) => config)

// ─── Response interceptor ─────────────────────────────────────────────────
// Centralised error handling — all API errors land here
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message ?? error.message ?? 'API error'
    return Promise.reject(new Error(message))
  }
)

// ─── Base methods ─────────────────────────────────────────────────────────

export const apiGet = <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> =>
  api.get<T>(url, config).then((r: AxiosResponse<T>) => r.data)

export const apiPost = <T, B = unknown>(
  url: string,
  body?: B,
  config?: AxiosRequestConfig
): Promise<T> =>
  api.post<T>(url, body, config).then((r: AxiosResponse<T>) => r.data)

export const apiPut = <T, B = unknown>(
  url: string,
  body?: B,
  config?: AxiosRequestConfig
): Promise<T> =>
  api.put<T>(url, body, config).then((r: AxiosResponse<T>) => r.data)

export const apiPatch = <T, B = unknown>(
  url: string,
  body?: B,
  config?: AxiosRequestConfig
): Promise<T> =>
  api.patch<T>(url, body, config).then((r: AxiosResponse<T>) => r.data)

export const apiDelete = <T = void>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> =>
  api.delete<T>(url, config).then((r: AxiosResponse<T>) => r.data)

export default api
