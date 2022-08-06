import { formatYearMonth } from '@shibaflog/libs/date'
import { Blog, Archive } from '@shibaflog/types'

export const getArchiveList = (contents: Blog[]): Archive => {
  const archiveList: Archive = {}

  contents.forEach((content) => {
    const month = formatYearMonth(content.publishedAt)
    if (!archiveList[month]) {
      archiveList[month] = []
    }
    archiveList[month].push(content)
  })
  return archiveList
}
