import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import NavBar from './NavBar'

export default {
  title: 'Layout/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>

const Template: ComponentStory<typeof NavBar> = () => <NavBar />

export const Normal = Template.bind({})
