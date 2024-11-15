const http = require('http');
const fs = require('fs');
let counter = 0;
var name;

const server = http.createServer((request, response) => {
    if (request.url === '/favicon.ico') {
        fs.readFile('./favicon.ico', (err, data) => {
            if (err) {
                response.writeHead(404, { 'Content-Type': 'text/plain' });
                response.write('404 Not Found');
            } else {
                response.writeHead(200, { 'Content-Type': 'image/x-icon' });
                response.write(data);
            }
            response.end();
        });
    } else {
        counter++;
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write('Hello friend ' + counter);
        response.end();
    }
});

server.listen(3003, () => {
    console.log('Server is listening on port 3003');
});