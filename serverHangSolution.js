const http = require('http');

const server = http.createServer(async (req, res) => {
  try {
    // Simulate a long-running task asynchronously
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate 2-second delay
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});