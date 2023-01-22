import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import BackButton from './BackButton'

export default {
  title: 'BackButton',
  component: BackButton,
} as ComponentMeta<typeof BackButton>

const Template: ComponentStory<typeof BackButton> = () => <BackButton />

export const Normal = Template.bind({})
