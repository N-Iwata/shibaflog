import { Grid, Title } from '@mantine/core'
import { GetStaticProps, GetStaticPaths } from 'next'

import ArticleCard from '@shibaflog/components/Card/ArticleCard'
import Main from '@shibaflog/components/Layout/Main'
import Seo from '@shibaflog/components/SEO/Seo'
import { getArchiveList } from '@shibaflog/libs/archive'
import { client } from '@shibaflog/libs/client'
import { Blog, Category, Archive } from '@shibaflog/types'

type Props = {
  blog: Blog[]
  categoryDetail: Category
  categoryList: Category[]
  archiveList: Archive
}

const CategoryId = ({ blog, categoryDetail, categoryList, archiveList }: Props) => (
  <>
    <Seo title={categoryDetail.name} description='Category page' />
    <Main categoryList={categoryList} archiveList={archiveList}>
      <Title order={2} mb='md'>
        {blog.length
          ? `[ ${categoryDetail.name} ] カテゴリの記事一覧`
          : `[ ${categoryDetail.name} ] カテゴリの記事がありません`}
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
  const data = await client.getList<Category>({ endpoint: 'categories' })

  const paths = data.contents.map((content) => `/category/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const allBlogData = await client.getList<Blog>({
    endpoint: 'blog',
    queries: { limit: 3000 },
  })
  const categoryBlogData = await client.getList<Blog>({
    endpoint: 'blog',
    queries: { filters: `categories[contains]${id}`, limit: 3000 },
  })

  const categoryDetailData = await client.getListDetail<Category>({
    endpoint: 'categories',
    contentId: id,
  })
  const categoryListData = await client.getList<Category>({ endpoint: 'categories' })
  const archiveListData = getArchiveList(allBlogData.contents)

  return {
    props: {
      blog: categoryBlogData.contents,
      categoryDetail: categoryDetailData,
      categoryList: categoryListData.contents,
      archiveList: archiveListData,
    },
  }
}

export default CategoryId
