import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Share from './Share'

export default {
  title: 'Share',
  component: Share,
} as ComponentMeta<typeof Share>

const Template: ComponentStory<typeof Share> = (args) => <Share {...args} />

export const Normal = Template.bind({})
Normal.args = {
  id: 'aaa',
  title: 'aaaaaaaaaaa',
}
