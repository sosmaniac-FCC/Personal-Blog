require('dotenv').config();

const bluebird = require('bluebird');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const socket = require('socket.io');

const commentRouter = require('./routes/comment');
const messageRouter = require('./routes/message');

const app = express();

app.use(cors()); // enabling all cross-origin requests

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/public')));

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = bluebird;

app.use(commentRouter);
app.use(messageRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

const server = app.listen(process.env.PORT || 8081, () => {
    console.log("SERVER LISTENING:", process.env.PORT || 8081);
});

const io = socket(server);

io.on('connection', (socket) => {
    socket.on('comment', (data) => {
        io.sockets.emit('comment', JSON.parse(data));
    });
});