import { Group, Text } from '@mantine/core'
import { IconClock } from '@tabler/icons'

import { formatYearMonthDay } from '@shibaflog/libs/date'

type Props = {
  publishedAt: string
}

const PublishedAtLabel = ({ publishedAt }: Props) => (
  <Group>
    <Group spacing={4}>
      <IconClock size={16} />
      <Text size='sm' color='dimmed'>
        {formatYearMonthDay(publishedAt)}
      </Text>
    </Group>
  </Group>
)

export default PublishedAtLabel
