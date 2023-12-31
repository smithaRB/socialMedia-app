import React from 'react';
import './Auth.css';
import Logo from '../../img/logo.png';
import LogIn from '../../components/logIn/LogIn';

const Auth = () => {
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="webname">
                    <h1>ZKC Media</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>
            <LogIn />
        </div>
    )
}

<div>

    <span style={{ fontSize: '12px' }}>
        Don't have an account Sign up
    </span>

    <button className="button infoButton">
        Login
    </button>
</div>

function SignUp() {
    return (
        <div className="a-right">
            <form className="infoForm authForm">


                <h3>Sign up</h3>
                <div>
                    <input type="text"
                        placeholder='First Name'
                        className='infoInput'
                        name='firstName' />

                    <input type="text"
                        placeholder='Last Name'
                        className='infoInput'
                        name='lastName' />
                </div>

                <div>
                    <input type="text"
                        className="infoInput"
                        placeholder='usernames' />
                </div>

                <div>
                    <input type="text"
                        className="infoInput"
                        name='password'
                        placeholder='password' />

                    <input type="text"
                        className="infoInput"
                        name='confirmpass'
                        placeholder='confirm Password' />
                </div>

                <div>
                    <span style={{ fontSize: '12px' }}>Already have an account. Login!</span>
                </div>
                <button className="button infoButton" type='submit'>Signup</button>
            </form>
        </div>
    )
}

export default Auth