import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Bio from './Bio'

export default {
  title: 'Bio',
  component: Bio,
} as ComponentMeta<typeof Bio>

const Template: ComponentStory<typeof Bio> = () => <Bio />

export const Normal = Template.bind({})
