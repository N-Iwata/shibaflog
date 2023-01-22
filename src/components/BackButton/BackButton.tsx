import React from 'react'

import { Button, Group } from '@mantine/core'
import Link from 'next/link'

const BackButton = () => (
  <Group position='center'>
    <Link href='/' passHref>
      <Button variant='subtle' size='md' component='a'>
        HOME に戻る
      </Button>
    </Link>
  </Group>
)

export default BackButton
