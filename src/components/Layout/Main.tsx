import { Container } from '@mantine/core'

type Props = {
  children: React.ReactNode
}

const Main = ({ children }: Props) => (
  <Container sx={{ maxWidth: 1280, marginTop: 32 }}>{children}</Container>
)

export default Main
