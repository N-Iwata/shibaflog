import { Group, Text } from '@mantine/core'
import { IconClock, IconRefresh } from '@tabler/icons'
import { format } from 'date-fns'

type Props = {
  publishedAt: string
  updatedAt: string
}

const PublishedAtLabel = ({ publishedAt, updatedAt }: Props) => (
  <Group>
    <Group spacing={4}>
      <IconClock size={16} />
      <Text size='sm' color='dimmed'>
        {format(new Date(publishedAt), 'yyyy/MM/dd')}
      </Text>
    </Group>
    {publishedAt < updatedAt && (
      <Group spacing={4}>
        <IconRefresh size={16} />
        <Text size='sm' color='dimmed'>
          {format(new Date(updatedAt), 'yyyy/MM/dd')}
        </Text>
      </Group>
    )}
  </Group>
)

export default PublishedAtLabel
