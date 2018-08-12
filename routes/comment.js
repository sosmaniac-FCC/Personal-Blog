const express = require('express');

const Comment = require('../models/comment');

const router = express.Router();

router.post('/newComment', (req, res) => {
    Comment.create({ from: req.body.name, comment: req.body.comment, postedTo: req.body.postedTo })
    .then((comment) => res.json(comment))
    .catch(() => res.send(false));
});

router.get('/allComments', (req, res) => {
    if (req.query.id) {
        Comment.find({ postedTo: req.query.id })
        .then(comments => res.send(comments.length > 0 ? comments : false))
        .catch(() => res.send(false));
    }
    else {
        console.log('No query specified');
        res.end();
    }
});

module.exports = router;