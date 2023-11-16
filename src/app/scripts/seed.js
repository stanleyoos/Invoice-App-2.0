const { db } = require("@vercel/postgres")
const { invoices } = require("../lib/placeholder-data")

async function seedInvoices(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `

    console.log(`Created "invoices" table`)

    // Insert data into the "invoices" table
    const insertedInvoices = await Promise.all(
      invoices.map(
        (invoice) => client.sql`
          INSERT INTO invoices (title, amount, status, date)
          VALUES (${invoice.title},  ${invoice.amount}, ${invoice.status}, ${invoice.date})
          ON CONFLICT (id) DO NOTHING;
        `
      )
    )

    console.log(`Seeded ${insertedInvoices.length} invoices`)

    return {
      createTable,
      invoices: insertedInvoices,
    }
  } catch (error) {
    console.error("Error seeding invoices:", error)
    throw error
  }
}

async function main() {
  const client = await db.connect()

  await seedInvoices(client)

  await client.end()
}

main().catch((err) => {
  console.error("An error occurred while attempting to seed the database:", err)
})
