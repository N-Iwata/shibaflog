import React from 'react'

import Head from 'next/head'

import { ROOT_URL } from '@shibaflog/const/url'

type Props = {
  title: string
  description: string
  image?: string
}

const Seo = ({ title, description, image }: Props) => (
  <Head>
    <title>{`${title} | SHIBAFLOG`}</title>
    <meta name='description' content={description} />
    <meta property='og:title' content={`${title} | SHIBAFLOG`} />
    <meta property='og:description' content={description} />
    <meta property='og:image' content={image || `${ROOT_URL}ogp.png`} />
    <meta name='twitter:card' content='summary_large_image' />
    <link rel='icon' href='/favicon.ico' />
  </Head>
)

export default Seo
