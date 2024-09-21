import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./app/config/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://ai-story-generator_owner:obS63YvkqXci@ep-dark-credit-a1j0e5jp.ap-southeast-1.aws.neon.tech/ai-story-generator?sslmode=require",
  },
  verbose: true,
  strict: true,
})