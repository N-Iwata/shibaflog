import { Box, Title } from '@mantine/core'
import { GetStaticProps } from 'next'

import BackButton from '@shibaflog/components/BackButton/BackButton'
import Main from '@shibaflog/components/Layout/Main'
import Seo from '@shibaflog/components/SEO/Seo'
import { getArchiveList } from '@shibaflog/libs/archive'
import { client } from '@shibaflog/libs/client'
import { Archive, Blog, Category } from '@shibaflog/types'

type Props = {
  categoryList: Category[]
  archiveList: Archive
}

const NotFound = ({ categoryList, archiveList }: Props) => (
  <>
    <Seo title='404' description='Page not found(404)' />

    <Main categoryList={categoryList} archiveList={archiveList}>
      <Title
        sx={(theme) => ({
          textAlign: 'center',
          fontWeight: 900,
          fontSize: 220,
          lineHeight: 1,
          marginBottom: theme.spacing.xl * 1.5,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
          [theme.fn.smallerThan('sm')]: {
            fontSize: 120,
          },
        })}
      >
        404
      </Title>
      <Title
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          textAlign: 'center',
          fontWeight: 600,
          fontSize: 32,

          [theme.fn.smallerThan('sm')]: {
            fontSize: 24,
          },
        })}
      >
        ページが見つかりませんでした...
      </Title>

      <Box mt='md'>
        <BackButton />
      </Box>
    </Main>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const allBlogData = await client.getList<Blog>({
    endpoint: 'blog',
    queries: { limit: 3000 },
  })

  const categoryListData = await client.getList<Category>({ endpoint: 'categories' })
  const archiveListData = getArchiveList(allBlogData.contents)
  return {
    props: {
      categoryList: categoryListData.contents,
      archiveList: archiveListData,
    },
  }
}

export default NotFound
