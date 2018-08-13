require('dotenv').config();

const bluebird = require('bluebird');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const favicon = require('serve-favicon');
const fs = require('fs');
const http = require('http');
const https = require('https');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const socket = require('socket.io');

const commentRouter = require('./routes/comment');
const messageRouter = require('./routes/message');

const app = express();

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = bluebird;

// development
app.use(cors());
// production
/*
app.use(cors({
  origin: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS']
}));
*/
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(commentRouter);
app.use(messageRouter);
/*
app.get('/server-environment', (req, res) => {
  res.send(`https://${process.env.HOST_NAME}:${process.env.HTTPS_PORT}`);
});
*/
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

// redirect to https
http.createServer((req, res) => {
    res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
    res.end();
}).listen(process.env.HTTP_PORT || 8080, process.env.HOST_NAME);

const httpsServer = https.createServer({
  key: fs.readFileSync('./certs/my-server.key.pem'),
  cert: fs.readFileSync('./certs/www_jgsimmons_me.crt'),
  ca: fs.readFileSync('./certs/www_jgsimmons_me.ca-bundle')
}, app);
httpsServer.listen(process.env.HTTPS_PORT || 8443, process.env.HOST_NAME, () => {
    console.log("SERVER LISTENING:", process.env.HTTPS_PORT || 8443);
});

const io = socket(httpsServer);
io.on('connection', (socket) => {
    socket.on('comment', (data) => {
        io.sockets.emit('comment', JSON.parse(data));
    });
});
