const Subscription = {
    message: {
        async subscribe(parent, args, {pubsub}, info) {
            if(args.user){
                return pubsub.asyncIterator(`${args.user}'s message`)
            }
            else{
                return pubsub.asyncIterator('message')
            }
            
        }
    },

    clear: {
        async subscribe(parent, args, {pubsub}, info) {
            return pubsub.asyncIterator('clear messages')
        }
    }
}

module.exports = Subscription;
