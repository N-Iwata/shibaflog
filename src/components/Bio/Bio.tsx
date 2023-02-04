import { Avatar, Box, Group, Text, Title } from '@mantine/core'
import { IconUserCircle } from '@tabler/icons'

import { AUTHER } from '@shibaflog/const/common'

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
      <Title sx={{ fontSize: 20 }} order={2}>
        Profile
      </Title>
    </Group>

    <Group mt='md' pl='md'>
      <Avatar src='/avatar.png' alt="it's me" radius='xl' />
      <Text>{AUTHER}</Text>
      <TwitterFollowButton href='https://twitter.com/rpf_nob' target='_blank'>
        Follow on Twitter
      </TwitterFollowButton>
    </Group>

    <Text my='md' mx='xs' pl='md' sx={{ fontSize: 14 }}>
      芝生管理が趣味のソフトウェアエンジニアです。
    </Text>
  </Box>
)

export default Bio
