import { Center, Group, Text } from '@mantine/core'
import { TwitterShareButton, HatenaShareButton, TwitterIcon, HatenaIcon } from 'react-share'

import { ROOT_URL } from '@shibaflog/const/url'
import { Blog } from '@shibaflog/types'

type Props = Pick<Blog, 'id' | 'title'>

const Share = ({ id, title }: Props) => {
  const articleTitle = `${title} #SHIBAFLOG @rpf_nob より`
  const articleUrl = `${ROOT_URL}blog/${id}`
  const iconSize = 48

  return (
    <Center>
      <Group>
        <Text>SHARE !!</Text>
        <TwitterShareButton url={`${articleUrl}/`} title={articleTitle}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <HatenaShareButton url={`${articleUrl}/`} title={articleTitle}>
          <HatenaIcon round size={iconSize} />
        </HatenaShareButton>
      </Group>
    </Center>
  )
}

export default Share
