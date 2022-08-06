import { Anchor, Box, List, ThemeIcon, Title } from '@mantine/core'
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

    <List
      spacing='xs'
      center
      icon={
        <ThemeIcon color='teal' size={28} radius='xl'>
          <IconCalendarStats />
        </ThemeIcon>
      }
      mt='md'
      ml='sm'
    >
      {Object.keys(archiveList).map((index) => (
        <List.Item
          key={index}
          pb='xs'
          sx={(theme) => ({
            borderBottom:
              theme.colorScheme === 'dark'
                ? `1px solid ${theme.colors.dark[5]}`
                : `1px solid ${theme.colors.teal[2]}`,
          })}
        >
          <Link href={`/archive/${index}`}>
            <Anchor sx={{ color: 'teal' }}>
              {index}（{archiveList[index].length}）
            </Anchor>
          </Link>
        </List.Item>
      ))}
    </List>
  </Box>
)

export default ArchiveList
