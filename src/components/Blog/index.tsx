import { Badge, Box, Image, Stack, Title } from '@mantine/core'

import PublishedAtLabel from '@shibaflog/components/PublishedAtLabel'
import { Blog } from '@shibaflog/types'

type Props = Pick<Blog, 'title' | 'hero' | 'body' | 'categories' | 'publishedAt' | 'updatedAt'>

const BlogContent = ({ title, hero, body, categories, publishedAt, updatedAt }: Props) => (
  <Stack spacing='md'>
    <Image src={hero.url} />

    <Title order={2}>{title}</Title>
    <PublishedAtLabel publishedAt={publishedAt} updatedAt={updatedAt} />
    <Box>
      {categories.map(({ name }) => (
        <Badge sx={{ ml: 'md' }}>{name}</Badge>
      ))}
    </Box>

    <Box
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `${body}`,
      }}
      sx={{
        img: {
          width: '100%',
        },
      }}
    />
  </Stack>
)

export default BlogContent
