import { Anchor, Box, List, ThemeIcon, Title } from '@mantine/core'
import { IconTag } from '@tabler/icons'
import Link from 'next/link'

import { Category } from '@shibaflog/types'

type Props = {
  categoryList: Category[]
}
const CategoryList = ({ categoryList }: Props) => (
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
      カテゴリ
    </Title>

    <List
      spacing='xs'
      center
      icon={
        <ThemeIcon color='teal' size={28} radius='xl'>
          <IconTag />
        </ThemeIcon>
      }
      mt='md'
      ml='sm'
    >
      {categoryList.map(({ id, name }) => (
        <List.Item
          key={id}
          pb='xs'
          sx={(theme) => ({
            borderBottom:
              theme.colorScheme === 'dark'
                ? `1px solid ${theme.colors.dark[5]}`
                : `1px solid ${theme.colors.teal[2]}`,
          })}
        >
          <Link href={`/category/${id}`}>
            <Anchor sx={{ color: 'teal' }}>{name}</Anchor>
          </Link>
        </List.Item>
      ))}
    </List>
  </Box>
)

export default CategoryList
