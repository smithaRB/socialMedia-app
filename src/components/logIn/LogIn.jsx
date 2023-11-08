import React from 'react';
import './Login.css';

const LogIn = () => {
    return (
        <div className="LogIn">
            <form className="infoForm authForm">
                <h3>Log In</h3>
                <div>
                    <input type="text"
                        placeholder='UserName'
                        className='infoInput'
                        name='userName' />

                    <input type="text"
                        placeholder='Password'
                        className='infoInput'
                        name='password' />
                </div>
                <div>

                    <span style={{ fontSize: '12px' }}>
                        Don't have an account Sign up
                    </span>

                    <button className="button infoButton">
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LogIn