import { Dispatch, SetStateAction, useEffect } from 'react'

import { Badge, Box, Image, Stack, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import PublishedAtLabel from '@shibaflog/components/PublishedAtLabel'
import { Blog, Toc } from '@shibaflog/types'

import TableOfContents from '../TableOfContents'

type Props = Pick<Blog, 'title' | 'hero' | 'body' | 'categories' | 'publishedAt' | 'updatedAt'> & {
  tocData: Toc[]
  activeId: string
  setActiveId: Dispatch<SetStateAction<string>>
}

const BlogContent = ({
  title,
  hero,
  body,
  categories,
  publishedAt,
  updatedAt,
  tocData,
  activeId,
  setActiveId,
}: Props) => {
  const matches = useMediaQuery('(min-width: 1000px)')

  useEffect(() => {
    if (document !== undefined) {
      const highlightToc = () => {
        const anchorsArray = Array.from(document.querySelectorAll('h2,h3,h4'))

        const options = {
          root: null,
          rootMargin: '0% 0px -80% 0px',
          threshold: 1,
        }

        const observerCallback = (entries: any) => {
          const entry = entries.find((entry: { isIntersecting: boolean }) => entry.isIntersecting)
          if (entry) {
            const index = anchorsArray.indexOf(entry.target)
            const { id } = anchorsArray[index]
            setActiveId(id)
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
      <Image src={hero.url} />

      <Title order={2}>{title}</Title>
      <PublishedAtLabel publishedAt={publishedAt} updatedAt={updatedAt} />
      <Box>
        {categories.map(({ id, name }) => (
          <Badge key={id} sx={{ ml: 'md' }}>
            {name}
          </Badge>
        ))}
      </Box>

      {!matches && <TableOfContents tocData={tocData} activeId={activeId} />}

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
}

export default BlogContent
