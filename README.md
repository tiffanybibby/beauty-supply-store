# Beauty Supply Store
Beauty Supply Store is an e-commerce application where users can purchase a list of their favorite hair/beauty products.

The motivation behind creating this app is the hope that it can be used by cosmetologists to sell their own products without having to pay extensive fees with big e-commerce apps. The goal is to empower entrepreneurs.

I had a blast creating this project with such special meaning to me. Learning Typescript and Prisma has been a welcomed challenge. I humbly thank you for taking the time to review my work and I am looking forward to discussing in greater detail.


## Tech Stack
The backend utilizes a PostgreSQL REST API, Docker, Prisma, NodeJs and Typescript - deployed to Heroku. While the frontend utilizes React, Typescript, and MaterialUI. Bcrypt & JWT also have cameos. Future releases will include inegration of the Stripe API (currently in code but debugging) backend for seamless purchases.


## Design Choices
I was insipired by Walmart's UI in creating this app. When I consider the frontend: usability and simple elegance is paramount. Also, who hasn't shopped at Walmart?
All styling was done with Material UI. I designed the logo myself using Adobe Photoshop. I do not own the rights to the font or star.

![UI Photo](https://github.com/tiffanybibby/beauty-supply-store/blob/main/frontend/src/assets/bss1.png?raw=true)
![UI Photo](https://github.com/tiffanybibby/beauty-supply-store/blob/main/frontend/src/assets/bss2.png?raw=true)
![UI Photo](https://github.com/tiffanybibby/beauty-supply-store/blob/main/frontend/src/assets/bss3.png?raw=true)

## Architecture
This app utilizes an MVC architectural model. PostgreSQL with Prisma are the model for the backend where renderable data is stored. The frontend React app respresents the view where the data from the backend is rendered. User interaction with the interface triggers communication between the controller and model to update the view render.


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
JWT_TOKEN_KEY=<<TOP SECRET>>
REACT_APP_STRIPE_SECRET_KEY=<<ALSO TOP SECRET>>
REACT_APP_STRIPE_PUBLIC_KEY=<<SECRET BUT SHAREABLE?>>
DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${DB_HOST}:${DB_PORT}/${POSTGRES_DB}?schema=${DB_SCHEMA}&sslmode=prefer
```
Step 4. Run the command $ npx prisma migrate dev --name "init" to create the prisma schema corresponding tables in the database

Step 5. Run the command **npm start** on the frontend

## Sample Payload

![Data Photo](https://github.com/tiffanybibby/beauty-supply-store/blob/main/frontend/src/assets/data.png?raw=true)

