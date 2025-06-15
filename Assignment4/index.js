const express = require('express');
const app = express();
const PORT = 3000;

// === Middleware #1: Logger (runs for all routes) ===
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// === Middleware #2: Adds current server time to req ===
app.use((req, res, next) => {
  req.requestTime = new Date();
  next();
});

// === Route: Home ===
app.get('/', (req, res) => {
  res.send(`Welcome! Request received at ${req.requestTime.toLocaleTimeString()}`);
});

// === Route: About (with custom middleware only for this route) ===
function aboutMiddleware(req, res, next) {
  console.log('Running custom middleware for /about route');
  next();
}

app.get('/about', aboutMiddleware, (req, res) => {
  res.send('This is the About page with extra middleware.');
});

// === Error-handling middleware ===
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).send('Something went wrong!');
});

// === Start the server ===
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
