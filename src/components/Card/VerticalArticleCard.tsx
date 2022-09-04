import { Badge, Box, Card, Group, Image, Title } from '@mantine/core'
import Link from 'next/link'

import PublishedAtWithUpdatedAtLabel from '@shibaflog/components/PublishedAtLabel/PublishedAtWithUpdatedAtLabel'
import { Blog } from '@shibaflog/types'

type Props = Pick<Blog, 'id' | 'title' | 'hero' | 'categories' | 'publishedAt' | 'revisedAt'>

const VerticalArticleCard = ({ id, title, hero, categories, publishedAt, revisedAt }: Props) => (
  <Card withBorder radius='md' p={0} sx={{ cursor: 'pointer' }}>
    <Group noWrap spacing={0}>
      <Link href={`/blog/${id}`}>
        <Image src={hero.url} height={140} width={200} />
      </Link>

      <Link href={`/blog/${id}`}>
        <Box>
          <Box px='sm'>
            {categories.map(({ id, name }) => (
              <Badge key={id} sx={{ ml: 'md' }}>
                {name}
              </Badge>
            ))}
          </Box>

          <Box mt='md' px='sm'>
            <Title order={4} mt='xs' mb='md'>
              {title}
            </Title>
            <PublishedAtWithUpdatedAtLabel publishedAt={publishedAt} revisedAt={revisedAt} />
          </Box>
        </Box>
      </Link>
    </Group>
  </Card>
)

export default VerticalArticleCard
