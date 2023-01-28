import { Grid, Title } from '@mantine/core'
import { GetStaticProps, GetStaticPaths } from 'next'

import ArticleCard from '@shibaflog/components/Card/ArticleCard'
import Main from '@shibaflog/components/Layout/Main'
import Seo from '@shibaflog/components/SEO/Seo'
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
    <Seo title={month} description='Monthly archive page' />
    <Main categoryList={categoryList} archiveList={archiveList}>
      <Title order={2} mb='md'>
        [ {month} ] の記事一覧
      </Title>
      <Grid gutter={16}>
        {blog.map(({ title, hero, categories, publishedAt, id }) => (
          <Grid.Col xs={12} sm={6} md={4} key={id}>
            <ArticleCard
              id={id}
              title={title}
              hero={hero}
              categories={categories}
              publishedAt={publishedAt}
            />
          </Grid.Col>
        ))}
      </Grid>
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
