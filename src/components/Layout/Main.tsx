import { Container } from '@mantine/core'

import { CONTENT_MAX_WIDTH, CONTENT_TOP } from '@shibaflog/const/size'

type Props = {
  children: React.ReactNode
}

const Main = ({ children }: Props) => (
  <Container sx={{ maxWidth: CONTENT_MAX_WIDTH, marginTop: CONTENT_TOP }}>{children}</Container>
)

export default Main
