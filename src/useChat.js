import { useState, useCallback} from 'react'
import { useMutation } from '@apollo/client'

import { CREATE_MESSAGE } from './graphql/createMessage.js'
import { CLEAR_MESSAGES } from './graphql/clearMessages.js'

// import { w3cwebsocket as W3CWebSocket } from 'websocket'

// const client = new W3CWebSocket('ws://localhost:4000')
// const client = new WebSocket('ws://localhost:4000')



const useChat = () => {
  const [username, setUsername] = useState('')
  const [receiver, setReceiver] = useState('')
  const [body, setBody] = useState('')

  const [createMessage] = useMutation(CREATE_MESSAGE)
  const [clearMessages] = useMutation(CLEAR_MESSAGES)

  const addMessageToDB = useCallback(
    () => {
      if (!username || !receiver) return

      createMessage({
        variables: {
          sender: username,
          receiver: receiver,
          body: body,
        }
      })
      setBody('')
    },
    [createMessage, username, receiver, body]
  )

  return {
    addMessageToDB,
    clearMessages,
    username,
    setUsername,
    receiver,
    setReceiver,
    body,
    setBody
  }
}

export default useChat

