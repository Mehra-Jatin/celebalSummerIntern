
---

## 🚀 Features

- Express.js setup
- Middleware to log requests and add timestamps
```// === Middleware #1: Logger (runs for all routes) ===
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// === Middleware #2: Adds current server time to req ===
app.use((req, res, next) => {
  req.requestTime = new Date();
  next();
});
```
- Basic routing:
  - `GET /` – Home route
  - `GET /about` – About route with custom middleware
- Error-handling middleware

---

## 🛠️ Installation

Make sure you have [Node.js](https://nodejs.org/) installed.

# Clone this repo or create your own directory
```bash

mkdir express-server
cd express-server
```


# Initialize project and install dependencies
```bash
npm init -y
npm install express
```
Run the server:
```bash
node index.js
```
