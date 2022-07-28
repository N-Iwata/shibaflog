import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { client } from '@shibaflog/libs/client'

type Props = {
  blog: {
    id: string
    title: string
    body: string
    publishedAt: string
  }
}

const BlogId = ({ blog }: Props) => (
  <div>
    <Head>
      <title>Shibaflog</title>
      <meta name='description' content='Generated by create next app' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
      <Link href='/'>
        <a>ホームへ戻る</a>
      </Link>
    </main>
  </div>
)

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.getList<Props>({ endpoint: 'blog' })

  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const data = await client.getListDetail<Props>({ endpoint: 'blog', contentId: id })

  return {
    props: {
      blog: data,
    },
  }
}

export default BlogId
