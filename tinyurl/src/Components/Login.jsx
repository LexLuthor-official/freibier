import React from 'react'

function Login() {
    return (
        <div>
            <p>Login</p>
            <form action="submit">
                <input type="text" name="name" id="name" />
                <input type="text" name="password" id="password" />
            </form>
        </div>
    )
}

export default Login
