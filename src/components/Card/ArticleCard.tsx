import { Avatar, Badge, Box, Card, Group, Image, Text } from '@mantine/core'
import Link from 'next/link'

import PublishedAtLabel from '@shibaflog/components/PublishedAtLabel/PublishedAtLabel'
import { AUTHER } from '@shibaflog/const/common'
import { Blog } from '@shibaflog/types'

type Props = Pick<Blog, 'id' | 'title' | 'hero' | 'categories' | 'publishedAt'>

const ArticleCard = ({ id, title, hero, categories, publishedAt }: Props) => (
  <Card
    withBorder
    radius='md'
    sx={(theme) => ({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
      position: 'relative',
    })}
  >
    <Card.Section mb='sm'>
      <Link href={`/blog/${id}`} passHref>
        <Box component='a'>
          <Image src={hero.url} />
        </Box>
      </Link>
    </Card.Section>

    <Box px='xs' sx={(theme) => ({ position: 'absolute', top: theme.spacing.xs, right: 0 })}>
      {categories.map(({ id, name }) => (
        <Badge ml={2} key={id} variant='gradient' gradient={{ from: 'teal', to: 'blue' }}>
          {name}
        </Badge>
      ))}
    </Box>

    <Link href={`/blog/${id}`} passHref>
      <Text component='a' weight={500}>
        {title}
      </Text>
    </Link>

    <Card.Section
      sx={(theme) => ({
        padding: `${theme.spacing.xs}px ${theme.spacing.xs}px`,
        marginTop: theme.spacing.md,
        borderTop: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.gray[7] : theme.colors.gray[2]
        }`,
      })}
    >
      <Group position='apart' spacing={4}>
        <PublishedAtLabel publishedAt={publishedAt} />
        <Group spacing={4}>
          <Avatar src='/avatar.png' alt="it's me" radius='xl' size='xs' />
          <Text size='xs' inline>
            {AUTHER}
          </Text>
        </Group>
      </Group>
    </Card.Section>
  </Card>
)

export default ArticleCard
