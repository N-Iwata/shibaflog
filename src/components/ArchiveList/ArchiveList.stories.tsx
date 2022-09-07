import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import ArchiveList from './ArchiveList'

export default {
  title: 'ArchiveList',
  component: ArchiveList,
} as ComponentMeta<typeof ArchiveList>

const Template: ComponentStory<typeof ArchiveList> = (args) => <ArchiveList {...args} />

export const Normal = Template.bind({})
Normal.args = {
  archiveList: {
    '2022-08': [
      {
        id: 'lxh23icrxc_3',
        createdAt: '2022-08-02T16:28:27.539Z',
        updatedAt: '2022-09-04T11:35:54.637Z',
        publishedAt: '2022-08-02T16:28:27.539Z',
        revisedAt: '2022-09-04T11:35:54.637Z',
        title: '記事４だよ',
        body: '',
        categories: [],
        hero: { url: '', height: 0, width: 0 },
      },
    ],
    '2022-07': [
      {
        id: 'j35iyjfyprz5',
        createdAt: '2022-07-28T10:04:24.261Z',
        updatedAt: '2022-09-04T11:36:01.275Z',
        publishedAt: '2022-07-28T10:08:29.920Z',
        revisedAt: '2022-09-04T11:36:01.275Z',
        title: '記事３を作成してみたよほげほげほげほげ',
        body: '',
        categories: [],
        hero: { url: '', height: 0, width: 0 },
      },
      {
        id: 'zhi3-qvnd',
        createdAt: '2022-07-28T08:26:15.426Z',
        updatedAt: '2022-09-04T11:36:06.375Z',
        publishedAt: '2022-07-28T08:26:15.426Z',
        revisedAt: '2022-09-04T11:36:06.375Z',
        title: '記事２を作成してみたよほげほげほげほげ',
        body: '',
        categories: [],
        hero: { url: '', height: 0, width: 0 },
      },
      {
        id: '91q-fu4ydny',
        createdAt: '2022-07-28T08:25:21.102Z',
        updatedAt: '2022-09-04T11:36:13.737Z',
        publishedAt: '2022-07-28T08:25:21.102Z',
        revisedAt: '2022-09-04T11:36:13.737Z',
        title: '記事１を作成してみたよほげほげほげほげ',
        body: '',
        categories: [],
        hero: { url: '', height: 0, width: 0 },
      },
    ],
  },
}
