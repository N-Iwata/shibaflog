import { Button, ButtonProps } from '@mantine/core'
import { IconBrandTwitter } from '@tabler/icons'

const TwitterFollowButton = (props: ButtonProps & React.ComponentPropsWithoutRef<'a'>) => (
  <Button
    component='a'
    leftIcon={<IconBrandTwitter size={20} color='#00ACEE' />}
    variant='light'
    {...props}
  />
)
export default TwitterFollowButton
