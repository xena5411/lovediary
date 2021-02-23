const Message = require('../models/message.js');

const Query = {
    async messages(parent, args, context, info) {
        if (!args.text) {
            return await Message
            .find()
            .sort({_id: 1});
        }

        return await Message.find({body: {$regex: new RegExp(args.text, 'i')}})
    },
    async messagesBySender(parent, args, context, info) {
        return await Message
        .find({sender: args.sender})
        .sort({_id: 1});
    },
    async messagesByReceiver(parent, args, context, info) {
        return await Message
        .find({receiver: args.receiver})
        .sort({_id: 1});
    },
    async messagesByUser(parent, args, context, info) {
        return await Message
        .find({$or:[{receiver: args.user}, {sender: args.user}]})
        .sort({_id: 1});
    }
}

module.exports = Query;