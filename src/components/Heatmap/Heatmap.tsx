import { useState } from 'react'

import { Box, Group, Select, Title } from '@mantine/core'
import { IconChartDots } from '@tabler/icons'
import CalendarHeatmap from 'react-calendar-heatmap'
// import ReactTooltip from 'react-tooltip'

import { getHeatMapYearList, getNowYearString } from '@shibaflog/libs/date'
import { HeatMap } from '@shibaflog/types'

type Props = {
  heatMapList: HeatMap[]
}

const Heatmap = ({ heatMapList }: Props) => {
  const [year, setYear] = useState<string | null>(getNowYearString())
  const selectYearList = getHeatMapYearList(heatMapList)

  if (!selectYearList) return null

  return (
    <Box
      p='xs'
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'white',
        color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[9],
        borderRadius: 8,
        border: `1px solid ${theme.colorScheme === 'dark' ? 'none' : theme.colors.gray[2]}`,
      })}
    >
      <Group pl='sm'>
        <IconChartDots size={24} stroke={1.5} />
        <Title sx={{ fontSize: 20 }} order={2}>
          Contributions
        </Title>
      </Group>

      <Box mt={2} p='xs'>
        <Box mb='sm'>
          <Select
            placeholder='select year'
            data={selectYearList}
            value={year}
            onChange={setYear}
            sx={{ width: '200px' }}
          />
        </Box>
        <Box
          py='md'
          sx={(theme) => ({
            '.react-calendar-heatmap-month-labels': {
              fill: theme.colorScheme === 'dark' ? theme.colors.gray[3] : theme.colors.dark[5],
              fontSize: 12,
            },
            '.react-calendar-heatmap svg': {
              backgroundColor: 'none',
            },
            '.react-calendar-heatmap .color-empty': {
              fill: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3],
            },
            '.react-calendar-heatmap .color-scale-1': { fill: '#d6e685' },
            '.react-calendar-heatmap .color-scale-2': { fill: '#8cc665' },
            '.react-calendar-heatmap .color-scale-3': { fill: '#44a340' },
            '.react-calendar-heatmap .color-scale-4': { fill: '#1e6823' },
          })}
        >
          <CalendarHeatmap
            startDate={new Date(`${Number(year) - 1}-12-31`)}
            endDate={new Date(`${Number(year)}-12-31`)}
            values={heatMapList}
            classForValue={(value) => (value ? `color-scale-${value.count}` : 'color-empty')}
            tooltipDataAttrs={(value: any) => {
              if (!value || !value.date) {
                return null
              }
              return {
                'data-tip': `${value.date} has count: ${value.count}`,
              }
            }}
          />
          {/* <ReactTooltip /> */}
        </Box>
      </Box>
    </Box>
  )
}

export default Heatmap
