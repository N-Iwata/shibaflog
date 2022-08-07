import { Anchor, Box, Text, ThemeIcon, Title } from '@mantine/core'
import { IconCalendarStats } from '@tabler/icons'
import Link from 'next/link'

import { Archive } from '@shibaflog/types'

type Props = {
  archiveList: Archive
}
const ArchiveList = ({ archiveList }: Props) => (
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
      月別アーカイブ
    </Title>

    <Box mt={2} p='xs'>
      {Object.keys(archiveList).map((index) => (
        <Link href={`/archive/${index}`} key={index}>
          <Anchor
            sx={(theme) => ({
              ...theme.fn.focusStyles(),
              display: 'block',
              paddingTop: theme.spacing.xs,
              paddingBottom: theme.spacing.xs,
              paddingLeft: theme.spacing.xs,
              color: 'teal',
              fontSize: theme.fontSizes.sm,
              textAlign: 'center',
              borderBottom:
                theme.colorScheme === 'dark'
                  ? `1px solid ${theme.colors.dark[5]}`
                  : `1px solid ${theme.colors.teal[2]}`,
              '&:hover': {
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
                textDecoration: 'none',
              },
            })}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ThemeIcon color='teal' size={24} radius='xl' mr='xs'>
                <IconCalendarStats />
              </ThemeIcon>
              <Text>
                {index}（{archiveList[index].length}）
              </Text>
            </Box>
          </Anchor>
        </Link>
      ))}
    </Box>
  </Box>
)

export default ArchiveList
