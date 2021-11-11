import { useContext } from 'react'


import { LoginContext } from '../Contexts/LoginContext'


function Profile() {

    const { username } = useContext(LoginContext)
    return (
        <div>

            { username }'s Profile.
        </div>
    )
}

export default Profile