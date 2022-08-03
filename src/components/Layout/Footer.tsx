import { Box, Container, Text } from '@mantine/core'

import { CONTENT_MAX_WIDTH, FOOTER_HEIGHT } from '@shibaflog/const/size'

const Footer = () => (
  <Box
    component='footer'
    mt={60}
    sx={(theme) => ({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.teal[0],
      color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[9],
    })}
  >
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        maxWidth: CONTENT_MAX_WIDTH,
        height: FOOTER_HEIGHT,
        alignItems: 'center',
      }}
    >
      <Text color='dimmed' size='sm'>
        ©2022 Shibaflog. All rights reserved.
      </Text>
    </Container>
  </Box>
)

export default Footer
