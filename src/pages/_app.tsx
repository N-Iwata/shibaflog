import { AppProps } from 'next/app'
import Head from 'next/head'

import Layout from '@shibaflog/components/Layout/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Page title</title>
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
    </Head>

    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
)

export default MyApp
