const http = require('http');
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '127.0.0.1';
const express = require('express');

const app = express();
const server = http.createServer(app);

server.listen(HOST, PORT, 
    () => console.log('Server is listening...'));