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
    <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
    <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
    <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
    <link rel='manifest' href='/favicon/site.webmanifest' />
    <link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#5bbad5' />
    <meta name='msapplication-TileColor' content='#da532c' />
    <meta name='theme-color' content='#ffffff' />
  </Head>
)

export default Seo
