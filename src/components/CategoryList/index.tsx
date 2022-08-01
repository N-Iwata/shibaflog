import { Box, List, ThemeIcon, Title } from '@mantine/core'
import { IconTag } from '@tabler/icons'
import Link from 'next/link'

import { Category } from '@shibaflog/types'

type Props = {
  category: Category[]
}
const CategoryList = ({ category }: Props) => (
  <Box>
    <Title order={3} sx={{ backgroundColor: 'teal', color: 'white', padding: '4px 8px' }}>
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
            <a>{name}</a>
          </Link>
        </List.Item>
      ))}
    </List>
  </Box>
)

export default CategoryList
