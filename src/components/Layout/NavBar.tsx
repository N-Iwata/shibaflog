import { ActionIcon, Center, Container, Group, Header, useMantineColorScheme } from '@mantine/core'
import { IconBrandGithub, IconBrandTwitter, IconMoon, IconSun } from '@tabler/icons'
import Link from 'next/link'

const HEADER_HEIGHT = 56

const NavBar = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <Header
      height={HEADER_HEIGHT}
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.teal[0],
        color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[9],
      })}
    >
      <Container sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: 1200 }}>
        <Group>
          <Link href='/'>
            <Center component='a' sx={{ cursor: 'pointer', fontSize: 32, fontWeight: 'bold' }}>
              Shibaflog
            </Center>
          </Link>
        </Group>
        <Group
          spacing={16}
          position='right'
          noWrap
          sx={{ alignItems: 'center', height: HEADER_HEIGHT }}
        >
          <a href='https://twitter.com/rpf_nob' target='_blank' rel='noopener noreferrer'>
            <ActionIcon color='blue'>
              <IconBrandTwitter />
            </ActionIcon>
          </a>

          <a href='https://github.com/N-Iwata' target='_blank' rel='noopener noreferrer'>
            <ActionIcon color='dark'>
              <IconBrandGithub />
            </ActionIcon>
          </a>

          <ActionIcon color={dark ? 'yellow' : 'blue'} onClick={() => toggleColorScheme()}>
            {dark ? <IconSun /> : <IconMoon />}
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  )
}

export default NavBar
