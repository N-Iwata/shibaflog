import { Group, Text } from '@mantine/core'
import { IconClock, IconRefresh } from '@tabler/icons'

import { formatYearMonthDay } from '@shibaflog/libs/date'

type Props = {
  publishedAt: string
  updatedAt: string
}

const PublishedAtLabel = ({ publishedAt, updatedAt }: Props) => (
  <Group>
    <Group spacing={4}>
      <IconClock size={16} />
      <Text size='sm' color='dimmed'>
        {formatYearMonthDay(publishedAt)}
      </Text>
    </Group>
    {publishedAt < updatedAt && (
      <Group spacing={4}>
        <IconRefresh size={16} />
        <Text size='sm' color='dimmed'>
          {formatYearMonthDay(updatedAt)}
        </Text>
      </Group>
    )}
  </Group>
)

export default PublishedAtLabel
