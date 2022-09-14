const mongoose = require('mongoose');

const FriendsSchema = new mongoose.Schema({
    requester: { type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
    status: {
        type: Number,
        enums: [
            0, // add friend
            1, // requested
            2, // pending
            3  // friends
        ]
    }
}, { timestamps: true }
)

const Friends = mongoose.model('Friends', FriendsSchema)

module.exports = Friends