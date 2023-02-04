import { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

import Layout from '@shibaflog/components/Layout/Layout'
import usePageView from '@shibaflog/hooks/usePageView'

import * as gtag from 'src/libs/gtag'

const MyApp = ({ Component, pageProps }: AppProps) => {
  usePageView()

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_MEASUREMENT_ID}');
          `,
        }}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
