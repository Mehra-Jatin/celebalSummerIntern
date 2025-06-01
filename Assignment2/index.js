const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const baseDir = path.join(__dirname, 'files');

// Create 'files' directory if it doesn't exist
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir);
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;
  const filename = query.filename;
  const filepath = path.join(baseDir, filename || '');

  // Set JSON header
  res.setHeader('Content-Type', 'application/json');

  if (pathname === '/create' && req.method === 'POST') {
    if (!filename || !query.content) {
      res.writeHead(400);
      return res.end(JSON.stringify({ error: 'Filename and content are required' }));
    }

    fs.writeFile(filepath, query.content, (err) => {
      if (err) {
        res.writeHead(500);
        return res.end(JSON.stringify({ error: 'Failed to create file' }));
      }
      res.writeHead(201);
      res.end(JSON.stringify({ message: 'File created successfully' }));
    });
  }

  else if (pathname === '/read' && req.method === 'GET') {
    if (!filename) {
      res.writeHead(400);
      return res.end(JSON.stringify({ error: 'Filename is required' }));
    }

    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404);
        return res.end(JSON.stringify({ error: 'File not found' }));
      }
      res.writeHead(200);
      res.end(JSON.stringify({ filename, content: data }));
    });
  }

  else if (pathname === '/delete' && req.method === 'DELETE') {
    if (!filename) {
      res.writeHead(400);
      return res.end(JSON.stringify({ error: 'Filename is required' }));
    }

    fs.unlink(filepath, (err) => {
      if (err) {
        res.writeHead(404);
        return res.end(JSON.stringify({ error: 'File not found or cannot delete' }));
      }
      res.writeHead(200);
      res.end(JSON.stringify({ message: 'File deleted successfully' }));
    });
  }

  else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
