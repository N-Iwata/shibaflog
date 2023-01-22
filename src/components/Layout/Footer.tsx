import { Anchor, Box, Container, Group, Text } from '@mantine/core'
import Link from 'next/link'

import { CONTENT_MAX_WIDTH, FOOTER_HEIGHT } from '@shibaflog/const/size'

const Footer = () => (
  <Box
    component='footer'
    mt={60}
    sx={(theme) => ({
      backgroundColor: theme.colors.teal[2],
      color: theme.colors.gray[9],
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
      <Group>
        <Text
          sx={(theme) => ({
            color: theme.colors.gray[7],
          })}
          size='sm'
        >
          ©2022 Shibaflog. All rights reserved.
        </Text>

        <Link href='/privacy_policy' passHref>
          <Anchor
            sx={(theme) => ({
              color: theme.colors.gray[7],
            })}
            size='sm'
          >
            Privacy policy
          </Anchor>
        </Link>
      </Group>
    </Container>
  </Box>
)

export default Footer
