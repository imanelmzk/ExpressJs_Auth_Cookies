# 🔐 Auth Cookie App (Express.js)

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express.js-Backend-blue)
![Auth](https://img.shields.io/badge/Auth-Cookies-orange)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

A simple backend project built with **Express.js** to demonstrate how **cookie-based authentication** works in a real-world scenario.

---

## 📌 Overview

This project illustrates the complete authentication flow using cookies:

* User login
* Cookie creation & storage
* Protected routes
* Middleware validation
* Logout mechanism

It is designed for **learning and understanding backend authentication concepts**.

---

## 📁 Project Structure

```
auth-cookie-app/
│
├── server.js
├── controllers/
│   └── auth.controller.js
├── middleware/
│   └── auth.middleware.js
```

---

## ⚙️ Tech Stack

* **Node.js**
* **Express.js**
* **Cookie-based Authentication**
* **Middleware Architecture**

---

## 🔄 Authentication Flow

```
[ Client ]
    │
    │ 1. POST /login (credentials)
    ▼
[ Server ]
    │
    │ 2. Validate user
    │ 3. Create cookie (token)
    ▼
[ Browser stores cookie ]
    │
    │ 4. Auto-send cookie with each request
    ▼
[ Middleware ]
    │
    │ 5. Validate cookie
    ▼
[ Protected Route Access Granted / Denied ]
```

---

## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Run the server

```bash
node server.js
```

Server runs on:

```
http://localhost:3000
```

---

## 🔐 API Endpoints

### ✅ Login

```http
POST /login
```

**Description:**

* Authenticates user credentials
* Sets an authentication cookie

---

### 🔒 Protected Route

```http
GET /protected
```

**Description:**

* Requires a valid cookie
* Access controlled via middleware

---

### 🚪 Logout

```http
POST /logout
```

**Description:**

* Clears authentication cookie
* Ends user session

---

## 🧩 Code Highlights

### 📌 Set Cookie

```js
res.cookie("token", "123456", {
  httpOnly: true,
});
```

---

### 📌 Read Cookie

```js
req.cookies.token
```

---

### 📌 Middleware Protection

```js
if (!req.cookies.token) {
  return res.status(401).json({ message: "Unauthorized" });
}
```

---

## 🔒 Security Best Practices

* Use `httpOnly` to prevent XSS attacks
* Use `secure: true` in production (HTTPS)
* Avoid storing sensitive data directly in cookies
* Use **JWT or sessions** for production-grade apps

---

## 🎯 Learning Goals

* Understand cookie-based authentication
* Learn Express middleware patterns
* Compare cookies vs localStorage
* Build a simple auth system from scratch

---

## 🚀 Future Improvements

* 🔑 JWT Authentication
* 🗄️ Database integration (MongoDB)
* 🌐 Frontend integration (React / Flutter)
* 🔄 Refresh token mechanism
* 🛡️ CSRF protection

---

## 🧪 Testing

You can test the API using:

* Postman
* Thunder Client
* Curl

---

## 👩‍💻 Author

Built as part of backend learning and experimentation with authentication systems.

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you find this project useful, feel free to ⭐ the repository.
