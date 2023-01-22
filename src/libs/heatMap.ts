import { Blog, HeatMap } from '@shibaflog/types'

import { formatYearMonthDay } from './date'

export const getHeatMapList = (contents: Blog[]) => {
  const list: HeatMap[] = []

  contents.forEach((c) => {
    const publishDate = formatYearMonthDay(c.publishedAt)
    const index = list.findIndex((l) => l.date === publishDate)

    if (index === -1) {
      list.push({ date: publishDate, count: 1 })
    } else {
      list[index].count++
    }
  })

  return list
}
