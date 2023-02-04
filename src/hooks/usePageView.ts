import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { pageview } from '@shibaflog/libs/gtag'

const usePageView = () => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}
export default usePageView
