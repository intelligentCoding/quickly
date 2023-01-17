import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const usePageLoading = (): boolean => {
  const router = useRouter()
  const [pageLoading, setPageLoading] = useState(false)

  useEffect(() => {
    const handlePageStart = (url: string) =>
      url !== router.asPath && setPageLoading(true)
    const handlePageComplete = (url: string) =>
      url !== router.asPath && setPageLoading(false)

    router.events.on('routeChangeStart', handlePageStart)
    router.events.on('routeChangeComplete', handlePageComplete)
    router.events.on('routeChangeError', handlePageComplete)

    return () => {
      router.events.off('routeChangeStart', handlePageStart)
      router.events.off('routeChangeComplete', handlePageComplete)
      router.events.off('routeChangeError', handlePageComplete)
    }
  })
  return pageLoading
}
