# Beauty Supply Store
Beauty Supply Store is an e-commerce application where users can purchase a list of their favorite hair/beauty products.

The motivation behind creating this app is the hope that it can be used by cosmetologists to sell their own products without having to pay extensive fees with big e-commerce apps. The goal is to empower entrepreneurs.

This full-stack app is a work in progress. The backend is complete utilizing a PostgreSQL REST API, Docker, Prisma, NodeJs and Typescript. 
Future releases will include inegration of the Stripe API backend for seamless purchases and a complete frontend with React, Redux, and Typescript, and MaterialUI. It will be deployed to Heroku and Netlify.

I humbly thank you for taking the time to review my work thus far and I am looking forward to discussing in greater detail. 

## Installation
Step 1. Clone or download the repository: https://github.com/tiffanybibby/beauty-supply-store
Step 2. run **npm install** on the backend
Step 3. Create a **.env** file:

```env
# Update to the appropriate value for your Database
DB_HOST=localhost
DB_PORT=5432
DB_SCHEMA=<<DATABASE_NAME>>
POSTGRES_USER=<USERNAME>
POSTGRES_PASSWORD=<<STRONG_PASSWORD>>
POSTGRES_DB=<<DATABASE_NAME>>

DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${DB_HOST}:${DB_PORT}/${POSTGRES_DB}?schema=${DB_SCHEMA}&sslmode=prefer
```
Step 4. Run the command $ npx prisma migrate dev --name "init" to create the prisma schema corresponding tables in the database

Step 5. Run the command npm start

## Architecture
This app utilizes an MVC architectural model. PostgreSQL with Prisma are the model for the backend where renderable data is stored. The frontend React app will respresent the view where the data from the backend will render. User interaction with the interface will trigger communication between the controller (Redux) and model to update the view render.