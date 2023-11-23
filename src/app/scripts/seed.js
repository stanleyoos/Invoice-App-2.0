const { db } = require("@vercel/postgres")
const { invoices, customers } = require("../lib/placeholder-data")

async function seedCustomers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS customers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
      );
    `

    console.log(`Created "customers" table`)

    // Insert data into the "customers" table
    const insertedCustomers = await Promise.all(
      customers.map(
        (customer) => client.sql`
        INSERT INTO customers (id, name, email)
        VALUES (${customer.id}, ${customer.name}, ${customer.email})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    )

    console.log(`Seeded ${insertedCustomers.length} customers`)

    return {
      createTable,
      customers: insertedCustomers,
    }
  } catch (error) {
    console.error("Error seeding customers:", error)
    throw error
  }
}

async function seedInvoices(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      added_by VARCHAR(255) NOT NULL,
      customer_id UUID NOT NULL,
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
          INSERT INTO invoices (added_by, customer_id, title, amount, status, date)
          VALUES (${invoice.addedBy}, ${invoice.customer_id}, ${invoice.title},  ${invoice.amount}, ${invoice.status}, ${invoice.date})
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

  await seedCustomers(client)
  await seedInvoices(client)

  await client.end()
}

main().catch((err) => {
  console.error("An error occurred while attempting to seed the database:", err)
})
