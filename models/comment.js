const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    postedTo: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const comment = mongoose.model('comment', CommentSchema);

module.exports = comment;