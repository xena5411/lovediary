import { gql } from '@apollo/client'

export const MESSAGES_BY_USER_QUERY = gql`
    query messagesByUser(
        $user: String!
    ){
        messagesByUser(
            user: $user
        ) {
            id
            sender
            receiver
            body
        }
    }`
