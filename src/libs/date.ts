import { format } from 'date-fns'

export const formatYearMonth = (date: string): string => format(new Date(date), 'yyyy_MM')
export const formatYearMonthDay = (date: string): string => format(new Date(date), 'yyyy_MM_dd')
