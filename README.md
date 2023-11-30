# Invoice App 2.0
## Build with NextJS, deployed on Vercel

## Live demo:
https://invoice-app-2-0.vercel.app/

# DONE ✅
- add authentication with Clerk
- Client page

# TO DO ✔️
- update single Client page 
- Create add client form
- add client update and delete function
- create more tests!
- Dashboard page (numbers of all clients, all invoices, ...)

# Models

## Invoice

id: string\
title: string\
amount: number\
date: string\
status: "pending" | "paid"\
customer_id: string


## Client

id: string\
name: string\
email: string\
// address_id: string


## Address
will be created soon

id: string\
country: string\
city: string\
street: string

