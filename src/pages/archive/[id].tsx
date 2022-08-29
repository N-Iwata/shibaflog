import { Stack, Title } from '@mantine/core'
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'

import VerticalArticleCard from '@shibaflog/components/Card/VerticalArticleCard'
import Main from '@shibaflog/components/Layout/Main'
import { getArchiveList } from '@shibaflog/libs/archive'
import { client } from '@shibaflog/libs/client'
import { formatYearMonth } from '@shibaflog/libs/date'
import { Blog, Category, Archive } from '@shibaflog/types'

type Props = {
  blog: Blog[]
  month: string
  categoryList: Category[]
  archiveList: Archive
}

const ArchiveId = ({ blog, month, categoryList, archiveList }: Props) => (
  <>
    <Head>
      <title>{`Shibaflog | ${month}`}</title>
      <meta name='description' content='Generated by create next app' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Main categoryList={categoryList} archiveList={archiveList}>
      <Title order={3} mb='md'>
        [ {month} ] の記事一覧
      </Title>
      <Stack spacing='md'>
        {blog.map(({ title, hero, categories, publishedAt, revisedAt, id }) => (
          <VerticalArticleCard
            key={id}
            id={id}
            title={title}
            hero={hero}
            categories={categories}
            publishedAt={publishedAt}
            revisedAt={revisedAt}
          />
        ))}
      </Stack>
    </Main>
  </>
)

export const getStaticPaths: GetStaticPaths = async () => {
  const allBlogData = await client.getList<Blog>({
    endpoint: 'blog',
    queries: { limit: 3000 },
  })

  const paths = allBlogData.contents.map(
    (content) => `/archive/${formatYearMonth(content.publishedAt)}`,
  )
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const month = params?.id as string
  const allBlogData = await client.getList<Blog>({
    endpoint: 'blog',
    queries: { limit: 3000 },
  })
  const monthArchiveBlogData = allBlogData.contents.filter(
    (contents) => formatYearMonth(contents.publishedAt) === month,
  )

  const categoryListData = await client.getList<Category>({ endpoint: 'categories' })
  const archiveListData = getArchiveList(allBlogData.contents)

  return {
    props: {
      blog: monthArchiveBlogData,
      month,
      categoryList: categoryListData.contents,
      archiveList: archiveListData,
    },
  }
}

export default ArchiveId
