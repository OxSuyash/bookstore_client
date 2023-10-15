import React, { useState } from 'react'
import "../styles/Login.scss"
import axios from 'axios'
import toast from 'react-hot-toast'
import { server } from '../App'

const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(`${server}/user/login`, {
                email, password
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                })
          toast.success(data.message)
            
        } catch (error) {
            console.log(error)
            
        }

    }
    return (
        <div className="login-container">
            <form className="form-main" onSubmit={submitHandler}>
                <p className="form-name">
                    Login
                </p>

                <div className="input-items">
                   

                    <input type="email" name="email" id="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} required /> <br />
                    <input type="password" name="password" id="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required /> <br />

                    <div className="form-button">
                        <button type='submit'>Login</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Login