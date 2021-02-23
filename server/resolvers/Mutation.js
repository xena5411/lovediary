const mongoose = require('mongoose');
const Message = require('../models/message.js');

const Mutation = {
    async createMessage(parent, args, {pubsub}, info){
        const message = new Message(args.data)
        const res = await message.save();
        // pubsub.publish('message', {
        //     message: {mutation: 'CREATED', data: res}
        // })
        pubsub.publish(`${args.data.receiver}'s message`,{
            message: {mutation: 'CREATED', data: res}
        })
        pubsub.publish(`${args.data.sender}'s message`,{
            message: {mutation: 'CREATED', data: res}
        })
        return res
    },

    async clearMessages(parent, args, {pubsub}, info){
        let res;
        await Message.deleteMany({}, (err) => {
            if(err){
                res = false;
            }
            else{
                res = true;
                pubsub.publish('clear messages', {
                    clear: true
                })
            }
        })

        return res;
    },

    async deleteMessage(parent, args, {pubsub}, info){
        let res = await Message.findByIdAndDelete(args.id)
        pubsub.publish(`${res.receiver}'s message`, {
            message: {mutation: 'DELETED', data: res}
        })
        pubsub.publish(`${res.sender}'s message`, {
            message: {mutation: 'DELETED', data: res}
        })
        return res;
    },

    async deleteMessagesByUser(parent, args, {pubsub}, info){
        await Message.deleteMany({
            $or:[
                {sender: args.user},
                {receiver: args.user}
            ]
        })
        pubsub.publish('clear messages', {
            clear: true
        })
        return true;
    }
};

module.exports = Mutation;