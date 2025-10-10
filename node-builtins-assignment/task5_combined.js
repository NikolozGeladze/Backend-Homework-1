const os = require('os')
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hello ${os.userInfo().username} from my first Node.js server! `);
    }
});

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});