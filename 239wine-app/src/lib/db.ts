import { Client } from 'pg'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error('DATABASE_URL env var is not set')
}

// Export a lazy-initialized, singleton Postgres client for server-side usage.
let client: Client | null = null

export async function getDbClient() {
  if (!client) {
    client = new Client({ connectionString })
    await client.connect()
  }
  return client
}