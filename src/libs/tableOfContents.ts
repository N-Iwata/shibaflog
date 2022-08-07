import * as cheerio from 'cheerio'

import { Toc } from '@shibaflog/types'

export const getTocData = (body: string): Toc[] => {
  const $ = cheerio.load(body)
  const headings = $('h2, h3, h4').toArray()
  const toc = headings.map((data) => ({
    // @ts-ignore
    text: data.childNodes[0].data as string,
    id: data.attribs.id,
    name: data.name,
  }))

  return toc
}
