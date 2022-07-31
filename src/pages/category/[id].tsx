import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { client } from '@shibaflog/libs/client'
import { Blog, Category } from '@shibaflog/types'

type Props = {
  blog: Blog[]
  category: Category
}

const CategoryId = ({ blog, category }: Props) => {
  if (blog.length === 0) {
    return <div>ブログコンテンツがありません</div>
  }
  return (
    <div>
      <Head>
        <title>Shibaflog</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div>
          <h2>{category.name}の記事一覧</h2>
          <ul>
            {blog.map(({ id, title }) => (
              <li key={id}>
                <Link href={`/blog/${id}`}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href='/'>
          <a>ホームへ戻る</a>
        </Link>
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.getList<Category>({ endpoint: 'categories' })

  const paths = data.contents.map((content) => `/category/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const blogData = await client.getList<Blog>({
    endpoint: 'blog',
    queries: { filters: `categories[contains]${id}` },
  })
  const categorydata = await client.getListDetail<Category>({
    endpoint: 'categories',
    contentId: id,
  })
  return {
    props: {
      blog: blogData.contents,
      category: categorydata,
    },
  }
}

export default CategoryId
