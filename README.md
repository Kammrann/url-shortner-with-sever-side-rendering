# URL Shortener Backend (Server-Side Rendering)

A URL Shortener backend application built using **Node.js**, **Express**, and **MongoDB**, featuring **Server-Side Rendering (SSR)** and **Stateful Authentication** for secure, session-based user access.

This project focuses on generating short URLs, redirecting users efficiently, rendering views on the server, and managing authenticated user sessions using cookies and server-side sessions.

---

## 🚀 Features

- Shorten long URLs into unique short links
- Fast redirection to original URLs
- **Server-Side Rendering (SSR)** using template engine
- **Stateful authentication using sessions**
- Secure login & logout functionality
- Cookie-based session management
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

## 🔐 Stateful Authentication

This project implements **Stateful Authentication**, where the authentication state is maintained on the **server side**.

### How it works:
- User logs in with credentials
- Server creates a **session**
- Session ID is stored in a **cookie**
- Server validates the session on every request
- User stays logged in until logout or session expiry

### Benefits:
- More control over user sessions
- Easy session invalidation on logout
- Better suited for **server-rendered applications**
- Enhanced security for sensitive operations

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **EJS** (server-side templating)
- **Express-Session** (stateful authentication)
- **Cookie-Parser**
- **NanoID** (for generating short URLs)

---

## 📁 Project Structure

