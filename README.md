# 🚀 Backend REST API with Express.js, TypeScript, Prisma & PostgreSQL

> A modern and scalable RESTful Backend API built with **Node.js**, **Express.js**, **TypeScript**, **Prisma ORM**, and **PostgreSQL**.
> This project demonstrates modern backend development practices including authentication, authorization, database management, security, and clean architecture.

---

# 👩‍💻 Author

**Imane Lmzk**

Backend Developer • Full Stack Learner • AI & Big Data Master's Student

---

# 📖 Overview

This project was developed as a learning and practice project to understand how professional backend applications are built.

The objective is to build a secure and maintainable REST API while learning the technologies commonly used in modern software development.

Throughout this project, I explored:

* REST API development
* Express.js framework
* TypeScript
* PostgreSQL
* Prisma ORM
* JWT Authentication
* Password Hashing
* Cookies
* Middleware
* CRUD Operations
* MVC Architecture
* API Testing
* Git & GitHub Workflow

---

# ✨ Features

✔ User Registration

✔ User Login

✔ JWT Authentication

✔ Protected Routes

✔ Password Hashing

✔ HTTP-only Cookies

✔ CRUD Operations

✔ PostgreSQL Database

✔ Prisma ORM

✔ RESTful API

✔ Error Handling

✔ TypeScript Support

✔ Modular Project Structure

---

# 🛠 Technologies Used

## Backend

* Node.js
* Express.js
* TypeScript

---

## Database

* PostgreSQL

Database administration:

* pgAdmin 4

---

## ORM

* Prisma ORM

Prisma Features:

* Prisma Client
* Prisma Migrate
* Prisma Schema
* Database Migration
* Database Seeding (optional)

---

## Authentication

* JSON Web Token (JWT)

JWT is used for:

* User Authentication
* Protected Routes
* Authorization

---

## Security

### Password Hashing

Passwords are never stored in plain text.

Two common hashing approaches were studied:

### bcrypt

* Salt Generation
* Password Hashing
* Password Verification

### Argon2

* Modern password hashing algorithm
* Resistant against GPU attacks
* Recommended for high security applications

---

## Cookies

Authentication can also be managed using HTTP-only Cookies.

Advantages:

* More secure than Local Storage
* Protected against JavaScript access
* Better security for authentication

---

## API Testing

* Postman

Used to test:

* GET requests
* POST requests
* PUT requests
* DELETE requests

---

# 📂 Project Structure

```
backend/

│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── src/
│
│   ├── config/
│
│   ├── controllers/
│
│   ├── middleware/
│
│   ├── routes/
│
│   ├── services/
│
│   ├── validators/
│
│   ├── generated/
│
│   ├── utils/
│
│   ├── types/
│
│   ├── app.ts
│
│   └── server.ts
│
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

---

# ⚙ Installation

Clone the repository

```bash
git clone https://github.com/imanelmzk/backend-project.git
```

Move into the project

```bash
cd backend-project
```

Install dependencies

```bash
npm install
```

---

# 🔧 Environment Variables

Create a `.env` file

```env
DATABASE_URL="postgresql://username:password@localhost:5432/database"

JWT_SECRET=your_super_secret_key

PORT=5001
```

---

# ▶ Running the Project

Development mode

```bash
npm run dev
```

Production mode

```bash
npm run build

npm start
```

---

# 🗄 Database

Generate Prisma Client

```bash
npx prisma generate
```

Run Migration

```bash
npx prisma migrate dev
```

Open Prisma Studio

```bash
npx prisma studio
```

---

# 🌐 REST API

## GET

Retrieve resources

```
GET /users
```

---

## GET by ID

```
GET /users/:id
```

---

## POST

Create a new resource

```
POST /users
```

---

## PUT

Update an existing resource

```
PUT /users/:id
```

---

## DELETE

Delete a resource

```
DELETE /users/:id
```

---

# 🔐 Authentication Flow

```
User Login
      │
      ▼
Password Verification
      │
      ▼
Generate JWT
      │
      ▼
Store Token
(Header or HTTP Cookie)
      │
      ▼
Access Protected Routes
```

---

# 📚 Concepts Learned

* HTTP Methods
* HTTP Status Codes
* RESTful API Design
* Express Routing
* Middleware
* Request & Response
* Controllers
* Services
* Environment Variables
* Authentication
* Authorization
* JWT
* Cookies
* Password Hashing
* bcrypt
* Argon2
* Prisma ORM
* PostgreSQL
* CRUD Operations
* Error Handling
* TypeScript
* Async/Await
* MVC Architecture
* API Testing
* Git
* GitHub

---

# 🚀 Future Improvements

* Refresh Token Authentication
* Role Based Access Control (RBAC)
* Email Verification
* Password Reset
* Docker Support
* Nginx Reverse Proxy
* Microservices Architecture
* Swagger API Documentation
* Unit Testing
* Integration Testing
* CI/CD Pipeline
* Deployment on Railway
* Deployment on Render
* Logging
* Rate Limiting
* Redis Cache

---

# 📈 Learning Objectives

This repository represents my learning journey in backend development.

The goal is to understand how professional backend systems are designed, developed, secured, and deployed using modern technologies and industry best practices.

---

# 🤝 Contributions

Suggestions and improvements are always welcome.

Feel free to fork the repository or open an issue.

---

# ⭐ If you find this project useful

Give this repository a ⭐ on GitHub.

Thank you for visiting this project.
