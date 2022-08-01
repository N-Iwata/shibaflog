import { Button, Container, Group, Title } from '@mantine/core'

const NotFound = () => (
  <Container>
    <Title
      sx={(theme) => ({
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 220,
        lineHeight: 1,
        marginBottom: theme.spacing.xl * 1.5,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
        [theme.fn.smallerThan('sm')]: {
          fontSize: 120,
        },
      })}
    >
      404
    </Title>
    <Title
      sx={(theme) => ({
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 32,

        [theme.fn.smallerThan('sm')]: {
          fontSize: 24,
        },
      })}
    >
      ページが見つかりませんでした...
    </Title>

    <Group position='center'>
      <Button variant='subtle' size='md'>
        HOME に戻る
      </Button>
    </Group>
  </Container>
)

export default NotFound
