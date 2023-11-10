## [TradeHub](https://tradehub-e-commerce.netlify.app)

# MERN Stack Application

### This Project was bootstrapped with [Vite](https://github.com/vitejs/vite)

## Introduction

This is a side project I've dedicated my free time to—an extensive e-commerce application developed using the MERN stack (MongoDB, Express, React, and Node.js). The application revolves around products, their reviews, orders, and user interactions. Within the system, users have the capability to add products to their cart. Upon completing their shopping, they can seamlessly handle orders using Stripe, a payment library integrated into the platform. Additionally, users can curate a list of favorite products and submit reviews for items they've ordered. To maintain authenticity, users are restricted from submitting more than one review per product to prevent duplicates. Please bear in mind that, given the nature of this being a personal project, flawless performance is not guaranteed. I would highly appreciate your feedback and any reports on encountered issues.

## Key Features

- Authentication using jsonwebtoken (jwt)
  - When user logs in server send a jwt to the browser and browser store that jwt in cookie for later sign up
  - Json web token has an expiration time and when the token expires the user must log back into the application
- Encrypting users password while creating new user (teacher,student,admin)

- Creating connection between Multiple Mongoose Models (Product,Order,User,Review)

  - Order and Product Model (one-to-many relationship),
  - User and Order (one-to-many relationship),
  - Product and Review (one-to-many relationship),
  - User and Review Model (Many-to-Many relationship),
  - are interconnected.

## Technologies Used

This project was created using the following technologies.

#### Client Side

- React JS
- React Query (I believe this is one of the greatest libraries for React; I used it for managing Remote State).
- Redux toolkit (For managing and centralizing application state)
- React-router-dom (To handle routing)
- React-error-boundary (to handle errors modern way)
- Stripe (to handle payments)
- Axios (for JWT authentication via interceptors and for making API calls).
- Styled Components (For styling)
- React-hot-toast (for displaying success/error notifications).
- React-hook-form (To handle Forms)
- React-icons (For icons)

#### Server Side

- Express
- Mongoose
- Stripe (to handle payments)
- Validator (for validating Mongoose Schemas)
- JWT (For authentication)
- bcryptjs and crypto (for data encryption)
- express-rate-limit ( to prevent excessive number of request from same ip address)
- cors (for cross origin resource sharing)
- and more..

#### Database

- MongoDB (MongoDB Atlas)

## What I learned from this project and which challenging (challenging for me) problems did I solve

In my project, when making requests from the frontend to the backend, the cookie wasn't being sent in the request (withCredentials). Similarly, the backend wasn't sending a cookie to the client. During development, this wasn't an issue because if I didn't specify the sameSite attribute when creating a cookie, it defaulted to sameSite: "Lax." With "Lax," there were no problems with requests coming from the same domain during development since the client and server were both running on localhost. Therefore, I didn't encounter any issues when sending cookies. However, when deploying the product to production, I learned that I needed to set the sameSite attribute to "None" and additionally include the secure: true attribute when setting sameSite to "None" in order to ensure proper functionality.

While finalizing my project, the idea of adding a feature to allow users to add products to their favorites occurred to me. Therefore, it was crucial for my code to be clean to ensure that implementing a new feature wouldn't be overly challenging. To introduce the "add to favorites" functionality, I added a field to the User model in MongoDB under the "favorites" section. This field consisted of an array of product IDs.

In the second stage, I needed to render these favorite products on the client side. My solution involved the following process: when a user clicked the login button on the user login page and the credentials were correct, the frontend sent a request to the login function on the backend. The user information was returned without being populated on the server side. The reason for not populating user information on the server was to avoid unnecessarily slowing down the application. Instead, I opted to populate the necessary information on the frontend only when entering relevant pages, thus optimizing performance.

After the user logged in and navigated to the "/favorites" page, I sent a request to the getUser function in the userController. There, I populated the favorites path, allowing me to process and display these favorite products on the page. This encapsulates the brief overview of how I implemented the favorites functionality.

Users were able to leave comments on products, but it was necessary to ensure that they couldn't leave multiple comments on the same product. To implement this feature, I had to delve into the MongoDB documentation, and my research led me to the solution of adding the following code snippet to the ReviewSchema:

```bash
ReviewSchema.index({ product: 1, customer: 1 }, { unique: true });
```

This addition ensures the uniqueness of the combination of product and customer, preventing users from submitting multiple reviews for the same product.

## How to Run Application

First of all clone the project

```bash
git clone https://github.com/eneskaplannn1/TradeHub.git
```

The "**client**" directory contains the React code. The "**server**" directory contains the code for the node.js express server.This project requries a **MongoDB** database to run.

cd both Project Directory and open two terminal window

### First window

```bash
cd client
npm install
npm run dev # (runs react at localhost:5173)
```

### Second window

Important: Before starting the Node.js server, make sure to fill in the fields in the example.env file located in the EduProTrack-server root directory with the correct values. Then, run the following commands consecutively.

```bash
cd server
npm install
node ./dev-data/data/import-devData.js --import # this code is responsible for creating reviews,products and  user data into mongoDB database
npm start # (runs nodemon at localhost:3000) make sure in customRequst.jsx, which located client folder file, setting baseURL to localhost:3000/api/v1
```

## Contributing

Pull requests are welcome. For major changes , please open an issue first to discuss what you would like to change.
