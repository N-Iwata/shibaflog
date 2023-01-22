import { Box, Group, Text, ThemeIcon } from '@mantine/core'
import { IconCategory, IconTag } from '@tabler/icons'
import Link from 'next/link'

import { Category } from '@shibaflog/types'

type Props = {
  categoryList: Category[]
}
const CategoryList = ({ categoryList }: Props) => (
  <Box
    p='xs'
    sx={(theme) => ({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'white',
      color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[9],
      borderRadius: 8,
      border: `1px solid ${theme.colorScheme === 'dark' ? 'none' : theme.colors.gray[2]}`,
    })}
  >
    <Group pl='sm'>
      <IconCategory size={24} stroke={1.5} />
      <Text sx={{ fontSize: 20 }}>Category</Text>
    </Group>

    <Box mt={2} p='xs'>
      {categoryList.map(({ id, name }) => (
        <Link href={`/category/${id}`} key={id} passHref>
          <Box
            component='a'
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
                  ? `1px solid ${theme.colors.dark[3]}`
                  : `1px solid ${theme.colors.teal[2]}`,
              '&:hover': {
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
              },
            })}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ThemeIcon color='teal' size={24} radius='xl' mr='xs'>
                <IconTag />
              </ThemeIcon>
              <Text>{name}</Text>
            </Box>
          </Box>
        </Link>
      ))}
    </Box>
  </Box>
)

export default CategoryList
