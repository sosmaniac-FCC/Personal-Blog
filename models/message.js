const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const message = mongoose.model('message', MessageSchema);

module.exports = message;