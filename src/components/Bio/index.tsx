import { Avatar, Box, Center, Space, Text, Title } from '@mantine/core'

const Bio = () => (
  <Box>
    <Title
      order={4}
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.teal[2],
        color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[7],
        padding: '4px 8px',
        fontSize: 18,
        textAlign: 'center',
        borderRadius: 16,
      })}
    >
      この芝生の管理人
    </Title>

    <Center mt='md'>
      <Avatar src='/avatar.png' alt="it's me" radius='xl' />
      <Text weight={800} ml='xs'>
        のふのふ🀄️
      </Text>
    </Center>

    <Center mt='md'>
      <Text mt='md' mx='xs' sx={{ fontSize: 14, textAlign: 'center' }}>
        芝生管理が趣味のフロントエンドエンジニアです。
        <Space h='md' />
        埼玉県内の自宅で芝生を管理しているので、
        <Space h={0} />
        その様子を記事に書いてお伝えできたらと思います。
      </Text>
    </Center>
  </Box>
)

export default Bio
