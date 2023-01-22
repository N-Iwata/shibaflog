import { Box, Text, Title } from '@mantine/core'
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

const PrivacyPolicy = ({ categoryList, archiveList }: Props) => (
  <>
    <Seo title='Privacy policy' description='Privacy policy' />
    <Main categoryList={categoryList} archiveList={archiveList}>
      <Title order={2} mb='md'>
        Privacy Policy
      </Title>
      {/* <Title order={3}>広告の配信について</Title>
      <Text>
        当サイトは第三者配信の広告サービス「Google Adsenseグーグルアドセンス」を利用しています。
        広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookie（クッキー）を使用することがあります。
        Cookie（クッキー）を無効にする設定およびGoogleアドセンスに関する詳細は
        <Anchor href='https://policies.google.com/technologies/ads?hl=ja'>
          「広告 – ポリシーと規約 – Google」
        </Anchor>
        をご覧ください。
      </Text> */}
      <Title order={3}>アクセス解析ツールについて</Title>
      <Text>
        当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
      </Text>
      <Text>
        このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくはここをクリックしてください。
      </Text>
      <Title order={3}>免責事項</Title>
      <Text>
        当サイトで掲載している画像の著作権・肖像権等は各権利所有者に帰属致します。権利を侵害する目的ではございません。記事の内容や掲載画像等に問題がございましたら、各権利所有者様本人が直接メール、DM、お問い合わせ等からご連絡下さい。確認後、対応させて頂きます。
      </Text>
      <Text>
        当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
      </Text>
      <Text>
        当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
      </Text>
      <Text>
        当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
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
  return {
    props: {
      categoryList: categoryListData.contents,
      archiveList: archiveListData,
    },
  }
}

export default PrivacyPolicy
