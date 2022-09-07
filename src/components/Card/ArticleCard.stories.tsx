import React from 'react'

import { Box } from '@mantine/core'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ArticleCard from './ArticleCard'

export default {
  title: 'ArticleCard',
  component: ArticleCard,
} as ComponentMeta<typeof ArticleCard>

const Template: ComponentStory<typeof ArticleCard> = (args) => (
  <Box sx={{ width: 400 }}>
    <ArticleCard {...args} />
  </Box>
)

export const Normal = Template.bind({})
Normal.args = {
  id: '',
  title: '今週の芝刈りの風景はこんな感じでした',
  hero: {
    height: 315,
    url: '/story/hero.png',
    width: 560,
  },
  categories: [
    {
      createdAt: '2022-07-28T15:11:49.528Z',
      id: '6z_mw90_zr',
      name: '雑草対策',
      publishedAt: '2022-07-28T15:11:49.528Z',
      revisedAt: '2022-07-28T15:11:49.528Z',
      updatedAt: '2022-07-28T15:11:49.528Z',
    },
  ],
  publishedAt: '2022-07-28T08:26:15.426Z',
}
