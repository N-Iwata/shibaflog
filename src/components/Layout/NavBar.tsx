import {
  ActionIcon,
  Box,
  Container,
  Group,
  Header,
  Image,
  useMantineColorScheme,
} from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons'
import Link from 'next/link'

import { CONTENT_MAX_WIDTH, HEADER_HEIGHT } from '@shibaflog/const/size'

const NavBar = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <Header
      height={HEADER_HEIGHT}
      sx={(theme) => ({
        backgroundColor: theme.colors.teal[2],
        color: theme.colors.gray[9],
        position: 'sticky',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: CONTENT_MAX_WIDTH,
          alignItems: 'center',
        }}
      >
        <Group>
          <Box
            sx={(theme) => ({
              a: {
                color: theme.colors.gray[9],
                cursor: 'pointer',
                fontSize: 32,
                fontWeight: 'bold',
                ':hover': { textDecoration: 'none' },
                textDecoration: 'none',
                verticalAlign: 'middle',
              },
            })}
          >
            <Link href='/' passHref>
              <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                <Image
                  src='/favicon/favicon.ico'
                  alt='Shibaflogのロゴ画像'
                  height={32}
                  width={32}
                  style={{ verticalAlign: 'middle' }}
                />
                <Box component='span' ml='xs'>
                  SHIBA
                </Box>
                <Box component='span' sx={{ color: 'teal' }}>
                  FLOG
                </Box>
              </Box>
            </Link>
          </Box>
        </Group>
        <Group
          spacing='md'
          position='right'
          noWrap
          sx={{ alignItems: 'center', height: HEADER_HEIGHT }}
        >
          <ActionIcon
            aria-label='Name'
            color={dark ? 'yellow' : 'blue'}
            variant='outline'
            onClick={() => toggleColorScheme()}
          >
            {dark ? <IconSun /> : <IconMoon />}
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  )
}

export default NavBar
