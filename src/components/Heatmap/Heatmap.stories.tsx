import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Heatmap from './Heatmap'

export default {
  title: 'Heatmap',
  component: Heatmap,
} as ComponentMeta<typeof Heatmap>

const Template: ComponentStory<typeof Heatmap> = (args) => <Heatmap {...args} />

export const Normal = Template.bind({})
Normal.args = {
  heatMapList: [
    { date: '2022-01-01', count: 1 },
    { date: '2022-01-12', count: 1 },
    { date: '2022-01-22', count: 2 },
    { date: '2023-01-01', count: 1 },
    { date: '2023-01-12', count: 1 },
    { date: '2023-01-22', count: 2 },
    { date: '2023-11-30', count: 3 },
    { date: '2023-12-30', count: 4 },
    { date: '2024-01-01', count: 1 },
    { date: '2024-01-12', count: 1 },
    { date: '2024-01-22', count: 2 },
    { date: '2024-11-30', count: 3 },
    { date: '2024-12-30', count: 4 },
    { date: '2025-12-30', count: 4 },
    { date: '2026-12-30', count: 4 },
  ],
}
