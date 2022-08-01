export type Blog = {
  id: string
  title: string
  body: string
  categories: Category[]
  hero: Hero
  publishedAt: string
  createdAt: string
  updatedAt: string
  revidsedAt: string
}
export type Category = {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  publisheAt: string
  revidsedAt: string
}

export type Hero = {
  url: string
  height: number
  width: number
}
