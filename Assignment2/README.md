# 📁 FileManager (Node.js)

A simple file management tool built using Node.js core modules: `fs`, `path`, and `http`.

This tool allows you to **create**, **read**, and **delete** files via HTTP requests.

---

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/filemanager.git
cd filemanager
```

2. Start the Server :

```bash
node index.js
```

## 🌐 API Endpoints


# ✅ Create a File
Method: POST
URL: /create?filename="FILENAME"&content="CONTENT"

Description:
Creates a file named test.txt with the content HelloWorld.

Example:

POST http://localhost:3000/create?filename=test.txt&content=HelloWorld


# 📖 Read a File
Method: GET
URL: /read?filename="FILENAME"

Description:
Reads and returns the contents of test.txt.

Example:

GET http://localhost:3000/read?filename=test.txt

# ❌ Delete a File
Method: DELETE
URL: /delete?filename="FILENAME"

Description:
Deletes the file test.txt.

Example:

DELETE http://localhost:3000/delete?filename=test.txt



## NOTE
Test in browser or Postman



