import { Box, List, ThemeIcon, Title } from '@mantine/core'
import { IconTag } from '@tabler/icons'
import Link from 'next/link'

import { Category } from '@shibaflog/types'

type Props = {
  category: Category[]
}
const CategoryList = ({ category }: Props) => (
  <Box>
    <Title
      order={3}
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.teal[0],
        color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[7],
        padding: '4px 8px',
      })}
    >
      カテゴリ
    </Title>

    <List
      spacing='xs'
      center
      icon={
        <ThemeIcon color='teal' size={24} radius='xl'>
          <IconTag />
        </ThemeIcon>
      }
      sx={{ marginTop: 16 }}
    >
      {category.map(({ id, name }) => (
        <List.Item key={id}>
          <Link href={`/category/${id}`}>
            <Box
              component='a'
              sx={{ color: 'teal', cursor: 'pointer', ':hover': { textDecoration: 'underline' } }}
            >
              {name}
            </Box>
          </Link>
        </List.Item>
      ))}
    </List>
  </Box>
)

export default CategoryList
