import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import PublishedAtWithUpdatedAtLabel from './PublishedAtWithUpdatedAtLabel'

export default {
  title: 'PublishedAtWithUpdatedAtLabel',
  component: PublishedAtWithUpdatedAtLabel,
} as ComponentMeta<typeof PublishedAtWithUpdatedAtLabel>

const Template: ComponentStory<typeof PublishedAtWithUpdatedAtLabel> = (args) => (
  <PublishedAtWithUpdatedAtLabel {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
  publishedAt: '2022-07-28T08:26:15.426Z',
  revisedAt: '2022-07-29T08:26:15.426Z',
}
