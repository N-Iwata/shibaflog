import { Dispatch, SetStateAction, useEffect } from 'react'

import { Badge, Box, Image, Stack, Title } from '@mantine/core'

import { Blog, Toc } from '@shibaflog/types'

import PublishedAtWithUpdatedAtLabel from '../PublishedAtLabel/PublishedAtWithUpdatedAtLabel'
import Share from '../Share/Share'
import TableOfContents from '../TableOfContents/TableOfContents'

type Props = Pick<
  Blog,
  'id' | 'title' | 'hero' | 'body' | 'categories' | 'publishedAt' | 'revisedAt'
> & {
  tocData: Toc[]
  setActiveId: Dispatch<SetStateAction<string>>
}

const BlogContent = ({
  id,
  title,
  hero,
  body,
  categories,
  publishedAt,
  revisedAt,
  tocData,
  setActiveId,
}: Props) => {
  useEffect(() => {
    if (document !== undefined) {
      const highlightToc = () => {
        const anchorsArray = Array.from(document.querySelectorAll('h2,h3,h4'))

        const options = {
          root: null,
          rootMargin: '0% 0px -80% 0px',
          threshold: 1,
        }

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
          const entry = entries.find((entry: { isIntersecting: boolean }) => entry.isIntersecting)
          if (entry) {
            const index = anchorsArray.indexOf(entry.target)
            const { id } = anchorsArray[index]

            if (id) {
              setActiveId(id)
            }
          }
        }

        const observer = new IntersectionObserver(observerCallback, options)

        anchorsArray.forEach((item: Element) => {
          observer.observe(item)
        })
      }
      highlightToc()
    }
  }, [setActiveId])

  return (
    <Stack spacing='md'>
      <Image src={hero.url} alt='blog pageのhero画像' />

      <Stack
        spacing='md'
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'white',
          color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[9],
          borderRadius: 16,
          padding: theme.spacing.xl,
          '@media (max-width: 1000px)': {
            padding: theme.spacing.sm,
          },
        })}
      >
        <Title order={1}>{title}</Title>
        <PublishedAtWithUpdatedAtLabel publishedAt={publishedAt} revisedAt={revisedAt} />
        <Box>
          {categories.map(({ id, name }) => (
            <Badge key={id} sx={{ ml: 'md' }}>
              {name}
            </Badge>
          ))}
        </Box>
        <Box
          sx={{
            '@media (min-width: 1000px)': {
              display: 'none',
            },
          }}
        >
          <TableOfContents tocData={tocData} />
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
            'h2,h3,h4': { marginTop: -70, paddingTop: 70 },
            a: { color: 'teal' },
          }}
        />

        <Share title={title} id={id} />
      </Stack>
    </Stack>
  )
}

export default BlogContent
