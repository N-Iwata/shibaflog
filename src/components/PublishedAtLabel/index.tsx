import { Group, Text } from '@mantine/core'
import { IconClock, IconRefresh } from '@tabler/icons'

import { formatYearMonthDay } from '@shibaflog/libs/date'

type Props = {
  publishedAt: string
  revisedAt: string
}

const PublishedAtLabel = ({ publishedAt, revisedAt }: Props) => (
  <Group>
    <Group spacing={4}>
      <IconClock size={16} />
      <Text size='sm' color='dimmed'>
        {formatYearMonthDay(publishedAt)}
      </Text>
    </Group>
    {publishedAt < revisedAt && (
      <Group spacing={4}>
        <IconRefresh size={16} />
        <Text size='sm' color='dimmed'>
          {formatYearMonthDay(revisedAt)}
        </Text>
      </Group>
    )}
  </Group>
)

export default PublishedAtLabel
