const express = require('express');

const Message = require('../models/message');

const router = express.Router();

router.post('/newMessage', (req, res) => {
    Message.create({ from: req.body.name, message: req.body.message })
    .then(() => res.send(true))
    .catch(() => res.send(false));
});

router.get('/allMessages', (req, res) => {
    Message.find({})
    .then((messages) => res.json(messages))
    .catch(() => res.send(false));
});

module.exports = router;