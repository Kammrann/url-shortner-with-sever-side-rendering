# URL Shortener Backend (Server-Side Rendering)

A URL Shortener backend application built using **Node.js**, **Express**, and **MongoDB**, featuring **Server-Side Rendering (SSR)** and **Stateless Authentication** using **JWT** for secure, token-based user access.

This project focuses on generating short URLs, redirecting users efficiently, rendering views on the server, and managing authenticated user sessions using **JWT tokens** instead of server-side sessions.

---

## 🚀 Features

- Shorten long URLs into unique short links
- Fast redirection to original URLs
- **Server-Side Rendering (SSR)** using template engine
- **Stateless authentication using JWT**
- Secure login & logout functionality
- Token-based authentication stored in **cookies** or **Authorization headers**
- Dynamic page rendering on the server
- MongoDB database for URL storage
- RESTful API structure
- Clean and scalable backend architecture

---

## 🖥️ Server-Side Rendering (SSR)

This project uses **Server-Side Rendering**, which means:

- HTML pages are generated **on the server**
- The browser receives a fully rendered HTML page
- Faster initial page load
- Better SEO performance
- Improved user experience

All views are rendered using a server-side template engine instead of client-side frameworks.

---

## 🔐 Stateless Authentication (JWT)

This project implements **Stateless Authentication**, where the authentication state is maintained **on the client via tokens**.

### How it works:
- User logs in with credentials
- Server generates a **JWT token**
- Token is sent to the client (via cookie or Authorization header)
- Client includes the token on every request
- Server validates the token on each request
- User stays authenticated until token expiry

### Benefits:
- No server-side session storage required
- Scalable for distributed systems
- Easy token invalidation using short expiry or blacklisting
- Well suited for **API-driven or SSR applications**
- Secure and modern authentication approach

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **EJS** (server-side templating)
- **jsonwebtoken (JWT)** (stateless authentication)
- **Cookie-Parser**
- **NanoID** (for generating short URLs)

---

## 📁 Project Structure
