import { Anchor, Box, Title } from '@mantine/core'
import Link from 'next/link'

import { Toc } from '@shibaflog/types'

type Props = {
  tocData: Toc[]
  activeId?: string
}

const TableOfContents = ({ tocData, activeId }: Props) => (
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
      目次
    </Title>

    <Box mt={2} p='xs'>
      {tocData.map(({ id, name, text }) => {
        const indent = parseInt(name.replace('h', ''), 10)

        return (
          <Link href={`#${id}`} key={id}>
            <Anchor
              sx={(theme) => ({
                ...theme.fn.focusStyles(),
                display: 'block',
                paddingTop: theme.spacing.xs,
                paddingBottom: theme.spacing.xs,
                paddingLeft: (indent - 1) * theme.spacing.md,
                color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[7],
                fontSize: theme.fontSizes.sm,
                borderLeft: `1px solid ${
                  activeId === id
                    ? theme.colors.teal[5]
                    : theme.colorScheme === 'dark'
                    ? theme.colors.dark[4]
                    : theme.colors.gray[3]
                }`,
                backgroundColor:
                  activeId === id ? theme.fn.rgba(theme.colors.teal[6], 0.15) : 'transparent',

                '&:hover': {
                  backgroundColor:
                    activeId === id
                      ? theme.fn.rgba(theme.colors.teal[4], 0.15)
                      : theme.colorScheme === 'dark'
                      ? theme.colors.dark[6]
                      : theme.colors.gray[1],
                  textDecoration: 'none',
                },
              })}
            >
              {text}
            </Anchor>
          </Link>
        )
      })}
    </Box>
  </Box>
)

export default TableOfContents
