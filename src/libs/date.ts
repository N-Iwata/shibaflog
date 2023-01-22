import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import { HeatMap } from '@shibaflog/types'

dayjs.extend(utc)
dayjs.extend(timezone)

export const formatYearMonth = (date: string): string =>
  dayjs.utc(date).tz('Asia/Tokyo').format('YYYY-MM')
export const formatYearMonthDay = (date: string): string =>
  dayjs.utc(date).tz('Asia/Tokyo').format('YYYY-MM-DD')

export const getNowYearNumber = (): number => {
  const now = new Date()
  const nowYear = now.getFullYear()
  return nowYear
}
export const getNowYearString = (): string => {
  const now = new Date()
  const nowYear = now.getFullYear()
  return nowYear.toString()
}

export const getHeatMapYearList = (heatMapList: HeatMap[]) => {
  const startDate = heatMapList[0]?.date
  const lastDate = heatMapList.at(-1)?.date

  if (!startDate) return null
  if (!lastDate) return null

  const startYear = new Date(startDate).getFullYear()
  const lastYear = new Date(lastDate).getFullYear()

  const list: { value: string; label: string }[] = []
  for (let year = startYear; year <= lastYear; year++) {
    const stringYear = year.toString()
    list.push({ value: stringYear, label: stringYear })
  }

  return list
}
