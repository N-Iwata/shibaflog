import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import TwitterFollowButton from './TwitterFollowButton'

export default {
  title: 'TwitterFollowButton',
  component: TwitterFollowButton,
} as ComponentMeta<typeof TwitterFollowButton>

const Template: ComponentStory<typeof TwitterFollowButton> = () => (
  <TwitterFollowButton href='https://twitter.com/rpf_nob' target='_blank'>
    Follow on Twitter
  </TwitterFollowButton>
)

export const Normal = Template.bind({})
