import { Group, Text } from '@mantine/core'
import { IconClock, IconRefresh } from '@tabler/icons'

import { formatYearMonthDay } from '@shibaflog/libs/date'

type Props = {
  publishedAt: string
  revisedAt: string
}

const PublishedAtWithUpdatedAtLabel = ({ publishedAt, revisedAt }: Props) => (
  <Group>
    <Group spacing={4}>
      <IconClock size={16} />
      <Text size='sm'>{formatYearMonthDay(publishedAt)}</Text>
    </Group>
    {publishedAt < revisedAt && (
      <Group spacing={4}>
        <IconRefresh size={16} />
        <Text size='sm'>{formatYearMonthDay(revisedAt)}</Text>
      </Group>
    )}
  </Group>
)

export default PublishedAtWithUpdatedAtLabel
