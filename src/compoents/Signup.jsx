import React, { useState } from 'react'
import { server } from '../App'
import axios from 'axios'
import toast from 'react-hot-toast'


const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(`${server}/user/new`, {
                name, email, password
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
        <div className="signu-container">
            <form className="form-main" onSubmit={submitHandler}>
                <p className="form-name">
                    Register
                </p>

                <div className="input-items">
                    <input type="text" name="name" id="name" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} required /> <br />

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

export default Signup