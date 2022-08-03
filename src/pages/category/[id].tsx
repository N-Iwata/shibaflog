import { Box, Grid, Stack, Title } from '@mantine/core'
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'

import Bio from '@shibaflog/components/BIo'
import VerticalArticleCard from '@shibaflog/components/Card/VerticalArticleCard'
import CategoryList from '@shibaflog/components/CategoryList'
import { client } from '@shibaflog/libs/client'
import { Blog, Category } from '@shibaflog/types'

type Props = {
  blog: Blog[]
  categoryDetail: Category
  categoryList: Category[]
}

const CategoryId = ({ blog, categoryDetail, categoryList }: Props) => (
  <>
    <Head>
      <title>Shibaflog</title>
      <meta name='description' content='Generated by create next app' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Grid>
      <Grid.Col sm={12} md={8}>
        <Box component='main'>
          <Title order={3} mb='md'>
            {blog.length
              ? `[ ${categoryDetail.name} ] カテゴリの記事一覧`
              : `[ ${categoryDetail.name} ] カテゴリの記事がありません`}
          </Title>
          <Stack spacing='md'>
            {blog.map(({ title, hero, categories, publishedAt, updatedAt, id }) => (
              <VerticalArticleCard
                key={id}
                id={id}
                title={title}
                hero={hero}
                categories={categories}
                publishedAt={publishedAt}
                updatedAt={updatedAt}
              />
            ))}
          </Stack>
        </Box>
      </Grid.Col>
      <Grid.Col sm={12} md={4}>
        <Box component='aside'>
          <Stack spacing='xl'>
            <Bio />
            <CategoryList categoryList={categoryList} />
          </Stack>
        </Box>
      </Grid.Col>
    </Grid>
  </>
)

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
  const categoryDetailData = await client.getListDetail<Category>({
    endpoint: 'categories',
    contentId: id,
  })
  const categoryListData = await client.getList<Category>({ endpoint: 'categories' })

  return {
    props: {
      blog: blogData.contents,
      categoryDetail: categoryDetailData,
      categoryList: categoryListData.contents,
    },
  }
}

export default CategoryId
