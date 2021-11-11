import React, { useContext } from 'react'

import { LoginContext } from '../Contexts/LoginContext'

function Login() {

    const {setUsername, setShowProfile} = useContext(LoginContext)

    return (
        <div>
            <input onChange={e => setUsername(e.target.value)} />
            <button onClick={() => setShowProfile(true)}>LOGIN</button>
        </div>
    )
}

export default Login
