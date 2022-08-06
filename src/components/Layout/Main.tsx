import { Box, Container, Grid, Stack } from '@mantine/core'

import { CONTENT_MAX_WIDTH, CONTENT_TOP } from '@shibaflog/const/size'
import { Archive, Category } from '@shibaflog/types'

import ArchiveList from '../ArchiveList'
import Bio from '../Bio'
import CategoryList from '../CategoryList'

type Props = {
  children: React.ReactNode
  categoryList: Category[]
  archiveList: Archive
}

const Main = ({ children, categoryList, archiveList }: Props) => (
  <Container sx={{ width: '100%', maxWidth: CONTENT_MAX_WIDTH, marginTop: CONTENT_TOP }}>
    <Grid>
      <Grid.Col sm={12} md={8}>
        <Box component='main'>
          <Stack spacing='md'>{children}</Stack>
        </Box>
      </Grid.Col>
      <Grid.Col sm={12} md={4}>
        <Box component='aside'>
          <Stack spacing='xl'>
            <Bio />
            <CategoryList categoryList={categoryList} />
            <ArchiveList archiveList={archiveList} />
          </Stack>
        </Box>
      </Grid.Col>
    </Grid>
  </Container>
)

export default Main
