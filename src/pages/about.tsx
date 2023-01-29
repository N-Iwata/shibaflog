import { Anchor, Box, Text, Title } from '@mantine/core'
import { GetStaticProps } from 'next'

import BackButton from '@shibaflog/components/BackButton/BackButton'
import Main from '@shibaflog/components/Layout/Main'
import Seo from '@shibaflog/components/SEO/Seo'
import { getArchiveList } from '@shibaflog/libs/archive'
import { client } from '@shibaflog/libs/client'
import { getHeatMapList } from '@shibaflog/libs/heatMap'
import { Archive, Blog, Category, HeatMap } from '@shibaflog/types'

type Props = {
  categoryList: Category[]
  archiveList: Archive
  heatMapList: HeatMap[]
}

const About = ({ categoryList, archiveList, heatMapList }: Props) => (
  <>
    <Seo title='Privacy policy' description='Privacy policy' />
    <Main categoryList={categoryList} archiveList={archiveList} heatMapList={heatMapList}>
      <Title order={2} mb='md'>
        About
      </Title>

      <Title order={3}>のふのふについて</Title>
      <Text component='p' sx={{ marginTop: 0 }}>
        はじめまして、のふのふと申します。
        都内のスタートアップ企業でソフトウェアエンジニアをしています。
        <br />
        <br />
        名古屋市出身で埼玉県三郷市に移住して妻と娘の3人で暮らしています。
      </Text>

      <Title order={3}>このブログについて</Title>
      <Text component='p' sx={{ marginTop: 0 }}>
        趣味程度ですが自宅の庭の芝生を管理しているので、その様子をメモとして記事に書いておきたいと思います。読んでいただいた方の何かしらの参考になれば幸いです。
        <br />
        <br />
        このブログは Next.js / TypeScript / Mantine UI / microCMS / Netlify
        を使用して、JamStackを素振りするためにのふのふが作成しました。
        何か問題や不具合等ございましたら、TwitterのDMや
        <Anchor href='https://github.com/N-Iwata/shibaflog'>GitHubのIssues</Anchor>
        などでご連絡いただけますと幸いです。
      </Text>

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
  const heatMapListData = getHeatMapList(allBlogData.contents)
  return {
    props: {
      categoryList: categoryListData.contents,
      archiveList: archiveListData,
      heatMapList: heatMapListData,
    },
  }
}

export default About
