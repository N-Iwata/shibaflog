import { Box, Container, Grid, Stack } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { CONTENT_MAX_WIDTH, CONTENT_TOP } from '@shibaflog/const/size'
import { Archive, Category, Toc } from '@shibaflog/types'

import ArchiveList from '../ArchiveList'
import Bio from '../Bio'
import CategoryList from '../CategoryList'
import TableOfContents from '../TableOfContents'

type Props = {
  children: React.ReactNode
  categoryList: Category[]
  archiveList: Archive
  tocData?: Toc[]
  activeId?: string
}

const Main = ({ children, categoryList, archiveList, tocData, activeId }: Props) => {
  const matches = useMediaQuery('(min-width: 1000px)')
  return (
    <Container sx={{ width: '100%', maxWidth: CONTENT_MAX_WIDTH, marginTop: CONTENT_TOP }}>
      <Grid>
        <Grid.Col sm={12} md={8}>
          <Box component='main'>
            <Stack spacing='md'>{children}</Stack>
          </Box>
        </Grid.Col>
        <Grid.Col sm={12} md={4}>
          <Box component='aside'>
            <Stack>
              <Bio />
              <CategoryList categoryList={categoryList} />
              <ArchiveList archiveList={archiveList} />
            </Stack>
          </Box>
          {matches && (
            <Box mt='md' sx={{ position: 'sticky', top: 72 }}>
              {tocData && tocData.length > 0 && (
                <TableOfContents tocData={tocData} activeId={activeId} />
              )}
            </Box>
          )}
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default Main
