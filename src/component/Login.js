import React, {useState} from 'react'
import {Input} from 'antd'

function Login({onClick, setUsername}) {
    const [input, setInput] = useState('')

    const handleClick = () => {
        if (input){
            onClick()
            setUsername(input)
        }
    }

    return(
        <div className='Login'>
            <h2>Your name?</h2>
            <span>
                <Input.Search 
                    placeholder='username' 
                    onChange = {(e) => {
                            setInput(e.target.value)
                    }}
                    enterButton = 'Login'
                    onSearch = {handleClick}
                    />
            </span>
        </div>
    )
}

export default Login