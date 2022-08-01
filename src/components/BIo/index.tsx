import { Avatar, Box, Center, Text, Title } from '@mantine/core'

const Bio = () => (
  <Box>
    <Title
      order={3}
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.teal[0],
        color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[7],
        padding: '4px 8px',
      })}
    >
      プロフィール
    </Title>
    <Center sx={{ marginTop: 16 }}>
      <Avatar src='avatar.png' alt="it's me" radius='xl' />
      <Text weight={800} sx={{ marginLeft: 8 }}>
        のふのふ
      </Text>
    </Center>

    <Center sx={{ marginTop: 16 }}>
      <Text>芝生管理が趣味のフロントエンドエンジニア</Text>
    </Center>
  </Box>
)

export default Bio
