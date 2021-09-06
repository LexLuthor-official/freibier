import React from 'react'

function Login() {
    return (
        <div>
            <p>Login</p>
            <form action="#">
                <input type="text" name="name" id="name" placeholder="Name" />
                <input type="password" name="password" id="password" placeholder="Password" />
            </form>
        </div>
    )
}

export default Login
