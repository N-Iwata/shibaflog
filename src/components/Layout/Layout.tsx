import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'

import Footer from './Footer'
import Main from './Main'
import NavBar from './NavBar'

type Props = {
  children: React.ReactNode
}

const THEME_KEY = 'mantine-color-scheme'

const Layout = ({ children }: Props) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: THEME_KEY,
    defaultValue: 'light',
    getInitialValueInEffect: true,
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
        }}
      >
        <NavBar />
        <Main>{children}</Main>
        <Footer />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default Layout
