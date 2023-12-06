# Invoice App 2.0
## Build with NextJS, deployed on Vercel

## Live demo:
https://invoice-app-2-0.vercel.app/

# DONE ✅
- add authentication with Clerk
- Client page
- Add, Update Client
- Started with Dashboard page

# TO DO ✔️
- Client delete function
- Create more tests!
- Dashboard page (numbers of all clients, all invoices, ...)

# Models

## Invoice

id: string\
title: string\
amount: number\
date: string\
status: "pending" | "paid"\
customer_id: string\
addedBy: Client string


## Client

id: string\
name: string\
email: string\
createdBy: string\
// address_id: string


## Address
will be created soon

id: string\
country: string\
city: string\
street: string

