import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)

export const formatYearMonth = (date: string): string =>
  dayjs.utc(date).tz('Asia/Tokyo').format('YYYY-MM')
export const formatYearMonthDay = (date: string): string =>
  dayjs.utc(date).tz('Asia/Tokyo').format('YYYY-MM-DD')
