import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import PublishedAtLabel from './PublishedAtLabel'

export default {
  title: 'PublishedAtLabel',
  component: PublishedAtLabel,
} as ComponentMeta<typeof PublishedAtLabel>

const Template: ComponentStory<typeof PublishedAtLabel> = (args) => <PublishedAtLabel {...args} />

export const Normal = Template.bind({})
Normal.args = {
  publishedAt: '2022-07-28T08:26:15.426Z',
}
