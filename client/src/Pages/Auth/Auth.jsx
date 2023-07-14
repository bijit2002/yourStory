import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Auth.css'
import icon from '../../assets/icon.png'
import { signup, login } from '../../actions/auth'

function Auth() {

    const [isSignup, setIsSignup] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSwitch = () => {
        setIsSignup(!isSignup)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email && !password) {
            alert("Enter email and password")
        }
        if (isSignup) {
            if (!name) {
                alert("Enter a name")
            }
            dispatch(signup({ name, email, password },navigate))
        } else {
            dispatch(login({ email, password },navigate))
        }
    }
    return (
        <section className='auth-section'>
            <div className='auth-container-2'>
                <form onSubmit={handleSubmit}>
                    {
                        isSignup && (
                            <label htmlFor='name'>
                                <h4>Display Name</h4>
                                <input type='text' id='name' name='name' onChange={(e) => setName(e.target.value)} />

                            </label>
                        )
                    }
                    <label htmlFor='email'>
                        <h4>Email</h4>
                        <input type='email' name='email' id='email' onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label htmlFor='password'>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h4>Password</h4>
                        </div>
                        <input type='password' name='password' id='password' onChange={(e) => setPassword(e.target.value)} />
                        
                    </label>
                    {
                        isSignup && (
                            <label htmlFor='check'>
                            </label>
                        )
                    }
                    <button type='submit' className='auth-btn'>{isSignup ? 'Sign Up' : 'Log in'}</button>
                    {
                        isSignup && (
                            <p style={{ color: "#666767", fontSize: "13px" }}>
                            </p>
                        )
                    }
                </form>
                <p>
                    {isSignup ? 'Already have an account?' : "Don't have an account?"}
                    <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log in" : "sign up"}</button>

                </p>
            </div>
        </section>
    )
}

export default Auth