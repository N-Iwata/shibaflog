import { format, parseISO } from 'date-fns'
import { ja } from 'date-fns/locale'

export const formatYearMonth = (date: string): string =>
  format(parseISO(date), 'yyyy_MM', { locale: ja })
export const formatYearMonthDay = (date: string): string =>
  format(parseISO(date), 'yyyy_MM_dd', { locale: ja })
