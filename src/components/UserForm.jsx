import React from 'react';

const UserForm = () => {
    return (
        <form action="">
            <input type="file"/>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Repeat password"/>
            <input type="text" placeholder="Name"/>

            <button>Save</button>
        </form>
    )
}

export default UserForm;
