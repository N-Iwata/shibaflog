import { Avatar, Box, Center, Text, Title } from '@mantine/core'

const Bio = () => (
  <Box>
    <Title order={3} sx={{ backgroundColor: 'teal', color: 'white', padding: '4px 8px' }}>
      プロフィール
    </Title>
    <Center sx={{ marginTop: 16 }}>
      <Avatar src='avatar.png' alt="it's me" radius='xl' />
    </Center>
    <Center sx={{ marginTop: 16 }}>
      <Text weight={800}>のふのふ</Text>
    </Center>
    <Center sx={{ marginTop: 16 }}>
      <Text>芝生管理が趣味のフロントエンドエンジニア</Text>
    </Center>
  </Box>
)

export default Bio
