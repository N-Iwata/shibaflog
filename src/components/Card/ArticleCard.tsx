import { Avatar, Badge, Box, Card, Group, Image, Text } from '@mantine/core'
import { NextLink } from '@mantine/next'

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
    <Card.Section mb='sm' component={NextLink} href={`/blog/${id}`}>
      <Image src={hero.url} />
    </Card.Section>

    <Box px='xs' sx={(theme) => ({ position: 'absolute', top: theme.spacing.xs, right: 0 })}>
      {categories.map(({ id, name }) => (
        <Badge ml={2} key={id} variant='gradient' gradient={{ from: 'teal', to: 'blue' }}>
          {name}
        </Badge>
      ))}
    </Box>

    <Text weight={500} component={NextLink} href={`/blog/${id}`}>
      {title}
    </Text>

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
