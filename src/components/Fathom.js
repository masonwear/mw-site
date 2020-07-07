import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'

function FathomHandler({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load(process.env.FATHOM_SITE_ID, {
      includedDomains: ['https://masonwear.co/']
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return null
}

export default FathomHandler
