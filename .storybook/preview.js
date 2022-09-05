import React from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { MantineProvider, ColorSchemeProvider, Box } from '@mantine/core'
import { RouterContext } from 'next/dist/shared/lib/router-context'

export const parameters = {
  layout: 'fullscreen',
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}

function ThemeWrapper({ children }) {
  return (
    <ColorSchemeProvider colorScheme='light' toggleColorScheme={() => {}}>
      <MantineProvider
        theme={{ colorScheme: useDarkMode() ? 'dark' : 'light' }}
        withGlobalStyles
        withNormalizeCSS
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export const decorators = [
  (story) => (
    <ThemeWrapper>
      <RouterContext.Provider
        value={{
          push: () => Promise.resolve(),
          replace: () => Promise.resolve(),
          prefetch: () => Promise.resolve(),
        }}
      >
        <Box sx={{ margin: 100 }}>{story()}</Box>
      </RouterContext.Provider>
    </ThemeWrapper>
  ),
]
