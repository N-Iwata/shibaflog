import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'service-domain',
  apiKey: process.env.API_KEY || '',
})
