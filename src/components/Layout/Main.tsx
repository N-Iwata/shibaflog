import { Box, Container, Grid, Stack } from '@mantine/core'

import { CONTENT_MAX_WIDTH, CONTENT_TOP } from '@shibaflog/const/size'
import { Archive, Category, HeatMap, Toc } from '@shibaflog/types'

import ArchiveList from '../ArchiveList/ArchiveList'
import Bio from '../Bio/Bio'
import CategoryList from '../CategoryList/CategoryList'
import Heatmap from '../Heatmap/Heatmap'
import TableOfContents from '../TableOfContents/TableOfContents'

type Props = {
  children: React.ReactNode
  categoryList: Category[]
  archiveList: Archive
  heatMapList?: HeatMap[]
  tocData?: Toc[]
  activeId?: string
}

const Main = ({ children, categoryList, archiveList, heatMapList, tocData, activeId }: Props) => {
  const matches = true
  return (
    <Container sx={{ width: '100%', maxWidth: CONTENT_MAX_WIDTH, marginTop: CONTENT_TOP }}>
      <Grid gutter={24}>
        <Grid.Col sm={12} md={8}>
          <Box component='main'>
            <Stack spacing='md'>
              {children}
              {heatMapList && <Heatmap heatMapList={heatMapList} />}
            </Stack>
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
          {matches && tocData && tocData.length > 0 && (
            <Box
              mt='md'
              sx={{
                position: 'sticky',
                top: 72,
                '@media (max-width: 1000px)': {
                  display: 'none',
                },
              }}
            >
              <TableOfContents tocData={tocData} activeId={activeId} />
            </Box>
          )}
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default Main
