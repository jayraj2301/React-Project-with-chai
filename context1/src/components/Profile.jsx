import React from 'react';
import UserContext from '../context/UserContext';

function Profile() {

    const {user} = React.useContext(UserContext);

    if(!user) return <div>Please Login</div>

    return <div>{user.username}</div>

}

export default Profile;