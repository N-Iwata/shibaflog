import React from 'react'

import { Button, Group } from '@mantine/core'
import { useRouter } from 'next/router'

const BackButton = () => {
  const router = useRouter()
  return (
    <Group position='center'>
      <Button variant='subtle' size='md' onClick={() => router.push('/')}>
        HOME に戻る
      </Button>
    </Group>
  )
}

export default BackButton
