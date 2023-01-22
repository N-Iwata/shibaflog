export type Blog = {
  id: string
  title: string
  body: string
  categories: Category[]
  hero: Hero
  publishedAt: string
  createdAt: string
  updatedAt: string
  revisedAt: string
}
export type Category = {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

export type Hero = {
  url: string
  height: number
  width: number
}

export type Archive = {
  [month: string]: Blog[]
}

export type HeatMap = {
  date: string
  count: number
}

export type Toc = {
  text: string
  id: string
  name: string
}
