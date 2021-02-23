import './App.css'
import React, { useRef, useState } from 'react'
import useChat from './useChat'
import { Button, Input, message } from 'antd'
import Login from './component/Login.js'
import MessagesBox from './component/MessagesBox.js'

function App() {
  const {
    addMessageToDB,
    clearMessages,
    username,
    setUsername,
    receiver,
    setReceiver,
    body,
    setBody
  } = useChat()

  const bodyRef = useRef(null)
  const [hasLogined, setHasLogined] = useState(false)

  const displayStatus = (s) => {
    if (s.msg) {
      const { msg } = s
      const content = {
        content: msg,
        duration: 0.5
      }
      message.error(content)
    }
  }

  return (
    <div className="App">
      {hasLogined ?
      <>
        <div className="App-title">
          <h1>Simple Chat</h1>
          <Button type="primary" danger onClick={() => {clearMessages({variables:{user: username}})}}>
            Clear
          </Button>
          <Button className='LogoutBtn' onClick={() => {setHasLogined(false)}}>
            Logout
          </Button>
        </div>
        <div className="App-messages">
          <MessagesBox username={username} receiver = {receiver}/>
        </div>
        <h3 className="Username-display">Username: {username}</h3>
        <Input
          placeholder="Username"
          value={receiver}
          onChange={(e) => {
            setReceiver(e.target.value);
          }}
          style={{ marginBottom: 10 }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              bodyRef.current.focus()
            }
          }}
        ></Input>
        <Input.Search
          rows={4}
          value={body}
          ref={bodyRef}
          enterButton="Send"
          onChange={(e) => {
            setBody(e.target.value);
          }}
          placeholder="Type a message here..."
          onSearch={(msg) => {
            if (!msg || !receiver) {
              displayStatus({
                type: 'error',
                msg: 'Please enter a receiver and a message body.'
              })
              return
            }
            addMessageToDB()
          }}
        ></Input.Search>
        </>:
      <Login onClick={()=>{setHasLogined(true)}} setUsername={setUsername}/>
      }
    </div>
  )
}

export default App
