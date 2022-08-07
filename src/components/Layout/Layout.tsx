import { Box, ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'

import Footer from './Footer'
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
        <Box
          sx={{
            display: 'grid',
            gridTemplateRows: 'auto 1fr auto',
            gridTemplateColumns: '100%',
            minHeight: '100vh',
          }}
        >
          <NavBar />
          {children}
          <Footer />
        </Box>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default Layout
