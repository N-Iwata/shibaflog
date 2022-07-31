import { ActionIcon, Center, Container, Group, Header, useMantineColorScheme } from '@mantine/core'
import { GitHubLogoIcon, MoonIcon, SunIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const ICON_SIZE = 36
const HEADER_HEIGHT = 56

const NavBar = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <Header height={HEADER_HEIGHT}>
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
              <TwitterLogoIcon width={ICON_SIZE} height={ICON_SIZE} />
            </ActionIcon>
          </a>

          <a href='https://github.com/N-Iwata' target='_blank' rel='noopener noreferrer'>
            <ActionIcon color='dark'>
              <GitHubLogoIcon width={ICON_SIZE} height={ICON_SIZE} />
            </ActionIcon>
          </a>

          <ActionIcon color={dark ? 'yellow' : 'blue'} onClick={() => toggleColorScheme()}>
            {dark ? (
              <SunIcon width={ICON_SIZE} height={ICON_SIZE} />
            ) : (
              <MoonIcon width={ICON_SIZE} height={ICON_SIZE} />
            )}
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  )
}

export default NavBar
