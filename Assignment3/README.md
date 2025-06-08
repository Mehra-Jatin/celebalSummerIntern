# 📘 Async Refactor Demo – Callbacks vs Async/Await

This project demonstrates how to refactor Node.js asynchronous code written using traditional **callbacks** into modern **Promises with async/await** for improved readability and maintainability.

---

## 📂 Files

### 1. `app.js` – Callback Style

This file demonstrates asynchronous operations using **nested callbacks** (also known as "callback hell").

```js
const fs = require('fs');

function copyFileCallback(src, dest, callback) {
  fs.readFile(src, 'utf8', (err, data) => {
    if (err) return callback(err);

    fs.writeFile(dest, data, (err) => {
      if (err) return callback(err);
      callback(null, 'File copied successfully!');
    });
  });
}

// Usage
copyFileCallback('source.txt', 'destination.txt', (err, message) => {
  if (err) {
    console.error('Error:', err.message);
  } else {
    console.log(message);
  }
});
```

---

### 2. `index.js` – Async/Await with Promises

This version refactors the same functionality using `fs.promises` and `async/await`.

```js
const fs = require('fs').promises;

async function copyFileAsync(src, dest) {
  try {
    const data = await fs.readFile(src, 'utf8');
    await fs.writeFile(dest, data);
    console.log('File copied successfully!');
  } catch (err) {
    console.error('Error:', err.message);
  }
}

// Usage
copyFileAsync('source.txt', 'destination.txt');
```

---

## 📦 How to Run

1. Make sure you have Node.js installed.
2. Create a file named `source.txt` with some content.
3. Run either script to test the functionality:

```bash
# Using callbacks
node app.js

# Using async/await
node index.js
```

After running, a new file named `destination.txt` should be created with the same content.

---

## ✅ Benefits of Async/Await

- Cleaner and more readable syntax
- Easier error handling with `try/catch`
- Avoids deeply nested callback functions

---

## 🛠 Tech Stack

- Node.js
- File System module (`fs`, `fs.promises`)

---

## 📄 License

This project is licensed under the MIT License.
