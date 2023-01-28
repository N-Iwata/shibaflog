import { Grid } from '@mantine/core'
import { GetStaticProps } from 'next'

import ArticleCard from '@shibaflog/components/Card/ArticleCard'
import Main from '@shibaflog/components/Layout/Main'
import Seo from '@shibaflog/components/SEO/Seo'
import { getArchiveList } from '@shibaflog/libs/archive'
import { client } from '@shibaflog/libs/client'
import { Blog, Category, Archive } from '@shibaflog/types'

type Props = {
  blog: Blog[]
  categoryList: Category[]
  archiveList: Archive
}

const Home = ({ blog, categoryList, archiveList }: Props) => (
  <>
    <Seo title='Home' description='Home page' />
    <Main categoryList={categoryList} archiveList={archiveList}>
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

export const getStaticProps: GetStaticProps = async () => {
  const allBlogData = await client.getList<Blog>({ endpoint: 'blog', queries: { limit: 3000 } })
  const categoryListData = await client.getList<Category>({ endpoint: 'categories' })
  const archiveListData = getArchiveList(allBlogData.contents)

  return {
    props: {
      blog: allBlogData.contents,
      categoryList: categoryListData.contents,
      archiveList: archiveListData,
    },
  }
}

export default Home
