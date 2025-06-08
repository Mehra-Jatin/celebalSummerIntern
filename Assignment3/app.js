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
