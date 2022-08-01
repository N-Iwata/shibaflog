import { Badge, Box, Card, Group, Image, Text, Title } from '@mantine/core'
import { format } from 'date-fns'
import Link from 'next/link'

import { Blog } from '@shibaflog/types'

type Props = Pick<Blog, 'id' | 'title' | 'hero' | 'categories' | 'publishedAt'>

const VerticalArticleCard = ({ id, title, hero, categories, publishedAt }: Props) => (
  <Card withBorder radius='md' p={0} sx={{ cursor: 'pointer' }}>
    <Group noWrap spacing={0}>
      <Link href={`/blog/${id}`}>
        <Image src={hero.url} height={140} width={200} />
      </Link>

      <Link href={`/blog/${id}`}>
        <Box>
          <Box px='sm'>
            {categories.map(({ name }) => (
              <Badge sx={{ ml: 'md' }}>{name}</Badge>
            ))}
          </Box>
          <Box mt='md' px='sm'>
            <Title order={4} mt='xs' mb='md'>
              {title}
            </Title>
            <Text size='xs' color='dimmed'>
              {format(new Date(publishedAt), 'yyyy/MM/dd HH:mm:ss')}
            </Text>
          </Box>
        </Box>
      </Link>
    </Group>
  </Card>
)

export default VerticalArticleCard
