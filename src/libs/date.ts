// import { format, parseISO } from 'date-fns'
// import { ja } from 'date-fns/locale'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)

export const formatYearMonth = (date: string): string =>
  // format(parseISO(date), 'yyyy_MM', { locale: ja })
  dayjs.utc(date).tz('Asia/Tokyo').format('YYYY-MM')
export const formatYearMonthDay = (date: string): string =>
  // format(parseISO(date), 'yyyy_MM_dd', { locale: ja })
  dayjs.utc(date).tz('Asia/Tokyo').format('YYYY-MM-dd')
