import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import TableOfContents from './TableOfContents'

export default {
  title: 'TableOfContents',
  component: TableOfContents,
} as ComponentMeta<typeof TableOfContents>

const Template: ComponentStory<typeof TableOfContents> = (args) => <TableOfContents {...args} />

export const Normal = Template.bind({})
Normal.args = {
  tocData: [
    { text: '見出し2', id: 'h09c73c8cc0', name: 'h2' },
    { text: '見出し3', id: 'hc3ac443ef2', name: 'h2' },
    { text: '見出し4', id: 'hda027c1cd6', name: 'h2' },
    { text: '見出し5', id: 'h93105ab0b6', name: 'h2' },
    { text: '見出し5-1', id: 'h5aa8f11722', name: 'h3' },
    { text: '見出し5-2', id: 'he26ba9da34', name: 'h3' },
    { text: '見出し6', id: 'hcc4be324e9', name: 'h2' },
  ],
  activeId: 'h5aa8f11722',
}
