import { gql } from '@apollo/client'

export const CREATE_MESSAGE = gql`
    mutation createMessage(
        $sender: String!
        $receiver: String!
        $body: String!
    ){
        createMessage(
            data:{
                sender: $sender
                receiver: $receiver
                body: $body
            }
        ){
            id
            sender
            receiver
            body
        }
    }
`