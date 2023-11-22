# Invoice App 2.0
## Build with NextJS, deployed on Vercel

## Live demo:
https://invoice-app-2-0.vercel.app/

# DONE ✅
- add authentication with Clerk\

# TO DO ✔️
- add dark mode to Clerk components 
- Client page\
- Dashboard page

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

id: string\
country: string\
city: string\
street: string


// COMMIT FOR REDEPLOYMENT