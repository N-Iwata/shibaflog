import { Avatar, Box, Group, Space, Text } from '@mantine/core'
import { IconUserCircle } from '@tabler/icons'

import TwitterFollowButton from '../Twitter/TwitterFollowButton'

const Bio = () => (
  <Box
    p='xs'
    sx={(theme) => ({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'white',
      color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[9],
      borderRadius: 8,
      border: `1px solid ${theme.colorScheme === 'dark' ? 'none' : theme.colors.gray[2]}`,
    })}
  >
    <Group pl='sm'>
      <IconUserCircle size={24} stroke={1.5} />
      <Text sx={{ fontSize: 20 }}>Profile</Text>
    </Group>

    <Group mt='md' pl='md'>
      <Avatar src='/avatar.png' alt="it's me" radius='xl' />
      <Text>のふのふ🀄️</Text>
      <TwitterFollowButton href='https://twitter.com/rpf_nob' target='_blank'>
        Follow on Twitter
      </TwitterFollowButton>
    </Group>

    <Text my='md' mx='xs' pl='md' sx={{ fontSize: 14 }}>
      芝生管理が趣味のフロントエンドエンジニアです。
      <Space h='md' />
      埼玉県内の自宅で芝生を管理しているので、 その様子を記事に書いてお伝えできたらと思います。
    </Text>
  </Box>
)

export default Bio
