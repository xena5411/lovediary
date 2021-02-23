import React, {useEffect} from 'react'
import { MESSAGES_BY_USER_QUERY } from '../graphql/queryMessagesByUser.js'
import { MESSAGE_SUBSCRIPTION } from '../graphql/messageSubscription.js'
// import { CLEAR_SUBSCRIPTION } from '../graphql/clearSubscription.js'
import { useQuery } from '@apollo/client'
import { Tag } from 'antd'

function MessagesBox({username}) {
  const {loading, error, data, subscribeToMore } = useQuery(MESSAGES_BY_USER_QUERY,
    {variables: {user: username},
    pollInterval: 500
  })

  useEffect(() => {
    subscribeToMore({
      document: MESSAGE_SUBSCRIPTION,
      variables: {user: username},
      updateQuery: (prev, { subscriptionData }) => {
        if ( subscriptionData.data.message.mutation === 'CREATED' ){
          if (!subscriptionData.data) return prev
          const newMsg = subscriptionData.data.message.data
  
          return {
            ...prev,
            messagesByUser: [...prev.messagesByUser, newMsg]
          }
        }
      }
    })
  }, [subscribeToMore, username])

  // useSubscription(CLEAR_SUBSCRIPTION, { onSubscriptionData:()=>{
  //   console.log('clear')
  //   refetch()
  // }})

  useEffect(()=>{
    console.log('data change')
    console.log(data)
  },[data])


  if(loading){
    return(
    <p style={{ color: '#ccc' }}>
      Loading...
    </p>)
  }

  else if(error){
    return(
    <p style={{ color: '#ccc' }}>
      Error:{error}
    </p>)
  }

  else if (data.messagesByUser.length === 0){
    return(
    <p style={{ color: '#ccc' }}>
      No messages...
    </p>)
  }

  return(
    <>
      {data.messagesByUser.map(({ sender, body, id, receiver}) => {
        if(sender === username){
          return (
            <p className="App-message" key={id}>
              <Tag color="red">to {receiver}</Tag> {body}
            </p>
          )
        }

        else {
          return (
            <p className="App-message" key={id}>
              <Tag color="blue">{sender}</Tag> {body}
            </p>
          )
        }
      })}
    </>
  )
}

export default MessagesBox