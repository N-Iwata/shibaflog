import { useEffect, useState } from 'react'

import { GetStaticProps, GetStaticPaths } from 'next'

import BlogContent from '@shibaflog/components/Blog'
import Main from '@shibaflog/components/Layout/Main'
import Seo from '@shibaflog/components/SEO/Seo'
import { getArchiveList } from '@shibaflog/libs/archive'
import { client } from '@shibaflog/libs/client'
import { getHeatMapList } from '@shibaflog/libs/heatMap'
import { getTocData } from '@shibaflog/libs/tableOfContents'
import { Archive, Blog, Category, HeatMap } from '@shibaflog/types'

type Props = {
  blog: Blog
  categoryList: Category[]
  archiveList: Archive
  heatMapList: HeatMap[]
}

const BlogId = ({ blog, categoryList, archiveList, heatMapList }: Props) => {
  const [activeId, setActiveId] = useState('')
  const { id, title, hero, revisedAt, publishedAt, body, categories } = blog
  const tocData = getTocData(body)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <Seo title={blog.title} description={blog.title} image={blog.hero.url} />
      <Main
        categoryList={categoryList}
        archiveList={archiveList}
        heatMapList={heatMapList}
        tocData={tocData}
        activeId={activeId}
      >
        <BlogContent
          id={id}
          title={title}
          hero={hero}
          body={body}
          categories={categories}
          publishedAt={publishedAt}
          revisedAt={revisedAt}
          tocData={tocData}
          setActiveId={setActiveId}
        />
      </Main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.getList<Blog>({ endpoint: 'blog' })

  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const allBlogData = await client.getList<Blog>({
    endpoint: 'blog',
    queries: { limit: 3000 },
  })
  const blogData = await client.getListDetail<Blog>({ endpoint: 'blog', contentId: id })
  const categoryListData = await client.getList<Category>({ endpoint: 'categories' })
  const archiveListData = getArchiveList(allBlogData.contents)
  const heatMapListData = getHeatMapList(allBlogData.contents)

  return {
    props: {
      blog: blogData,
      categoryList: categoryListData.contents,
      archiveList: archiveListData,
      heatMapList: heatMapListData,
    },
  }
}

export default BlogId
