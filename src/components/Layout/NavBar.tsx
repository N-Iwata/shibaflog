import { ActionIcon, Anchor, Container, Group, Header, useMantineColorScheme } from '@mantine/core'
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
        sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: CONTENT_MAX_WIDTH }}
      >
        <Group>
          <Link href='/'>
            <Anchor
              sx={(theme) => ({
                color: theme.colors.gray[9],
                cursor: 'pointer',
                fontSize: 32,
                fontWeight: 'bold',
                ':hover': { textDecoration: 'none' },
              })}
            >
              Shibaflog
            </Anchor>
          </Link>
        </Group>
        <Group
          spacing='md'
          position='right'
          noWrap
          sx={{ alignItems: 'center', height: HEADER_HEIGHT }}
        >
          <ActionIcon
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
