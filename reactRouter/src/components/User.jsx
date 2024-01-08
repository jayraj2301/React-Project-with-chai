// import React from 'react';
import {useParams} from 'react-router-dom';

function User() {
    const {userName} = useParams();
    return (
        <div className='text-6xl text-center my-5 py-2 bg-red-500'>
            User : {userName}
        </div>
    );
}

export default User;