import React from 'react'
import '../assets/css/login.scss'

const Login = () => {
    return (
        <div className="login-page">
            <div className="login-container">
                <div className="page-title">Welcome to kuber's genealogy </div>
                <div className="form-container">
                    <form action="">
                        <div className="input-container">
                            <label htmlFor="username">Usename</label>
                            <input type="text" name="username" id="username" placeholder='techboydk' />
                        </div>
                        <div className="input-container">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder='password' />
                        </div>
                        <button type="submit" className='btn login-btn'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
