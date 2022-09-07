import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import CategoryList from './CategoryList'

export default {
  title: 'CategoryList',
  component: CategoryList,
} as ComponentMeta<typeof CategoryList>

const Template: ComponentStory<typeof CategoryList> = (args) => <CategoryList {...args} />

export const Normal = Template.bind({})
Normal.args = {
  categoryList: [
    {
      id: '1cdlymmyw6g',
      name: '土壌改良',
      createdAt: '2022-07-28T15:13:11.515Z',
      publishedAt: '2022-07-28T15:13:11.515Z',
      revisedAt: '2022-07-28T15:13:11.515Z',
      updatedAt: '2022-07-28T15:13:11.515Z',
    },
    {
      id: '8fdq884jw',
      name: '害虫対策',
      createdAt: '2022-07-28T15:12:27.778Z',
      publishedAt: '2022-07-28T15:12:27.778Z',
      revisedAt: '2022-07-28T15:12:27.778Z',
      updatedAt: '2022-07-28T15:12:27.778Z',
    },
    {
      id: '6z_mw90_zr',
      name: '雑草対策',
      createdAt: '2022-07-28T15:11:49.528Z',
      publishedAt: '2022-07-28T15:11:49.528Z',
      revisedAt: '2022-07-28T15:11:49.528Z',
      updatedAt: '2022-07-28T15:11:49.528Z',
    },
  ],
}
