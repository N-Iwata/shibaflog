import { Box, Group, Text } from '@mantine/core'
import { IconListSearch } from '@tabler/icons'
import Link from 'next/link'

import { Toc } from '@shibaflog/types'

type Props = {
  tocData: Toc[]
  activeId?: string
}

const TableOfContents = ({ tocData, activeId }: Props) => (
  <Box
    p='xs'
    sx={(theme) => ({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'white',
      color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[9],
      position: 'sticky',
      borderRadius: 8,
      border: `1px solid ${theme.colorScheme === 'dark' ? 'none' : theme.colors.gray[2]}`,
    })}
  >
    <Group pl='sm'>
      <IconListSearch size={24} stroke={1.5} />
      <Text sx={{ fontSize: 20 }}>Table of contents</Text>
    </Group>

    <Box mt={2} p='xs'>
      {tocData.map(({ id, name, text }) => {
        const indent = parseInt(name.replace('h', ''), 10)

        return (
          <Link href={`#${id}`} key={id} passHref>
            <Box
              component='a'
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
                },
                textDecoration: 'none',
              })}
            >
              {text}
            </Box>
          </Link>
        )
      })}
    </Box>
  </Box>
)

export default TableOfContents
