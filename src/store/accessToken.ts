export const setAccessToken = (s: string): void => {
  localStorage.setItem('token', s)
}
export const getAccessToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('token')
  } else {
    return null
  }
}
