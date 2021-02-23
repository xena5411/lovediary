import { gql } from '@apollo/client'

export const CLEAR_MESSAGES = gql`
    mutation deleteMessagesByUser(
        $user: String!
    ){
        deleteMessagesByUser(user: $user)
    }
`

