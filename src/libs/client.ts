import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'shibaflog',
  apiKey: process.env.API_KEY || '',
})
