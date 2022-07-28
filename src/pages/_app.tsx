import { AppProps } from 'next/app'

import '@shibaflog/styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default MyApp
