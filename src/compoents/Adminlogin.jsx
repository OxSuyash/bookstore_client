import React, { useState, useReducer } from 'react'
import { server } from '../App'
import axios from 'axios'
import toast from 'react-hot-toast'
import "../styles/Adminlogin.scss"
import { Navigate } from 'react-router-dom'
import Dashboard from './Dashboard'


const initialState = {
    email: "",
    password: "",
    loggedIn: false,
    error: false
}

const reducer = (currentState, action) => {
    // console.log(currentState)
    switch (action.type) {
        case "SUCCESS":
            return {
                ...currentState,
                loggedIn: true,
                email: "",
                password: ""
            }
        case "ERROR": return {
            ...currentState,
            error: "Invalid"
        };
        case "SETUSERNAME": return {
            ...currentState,
            email: action.value,
        };
        case "SETPASSWORD": return {
            ...currentState,
            password: action.value,
        };
        default: return currentState
    }

}





const Adminlogin = () => {
    const [updatedState, dispatch] = useReducer(reducer, initialState)


    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")


    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(`${server}/admin/login`, {
                email: updatedState.email,
                password: updatedState.password
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                })
            toast.success(data.message)
            console.log(data.token)
            dispatch({ type: "SUCCESS" })



        } catch (error) {
            console.log(error)
            dispatch({ type: "ERROR" })

        }
    }
    // console.log(updatedState.loggedIn)
    if (updatedState.loggedIn) return <Navigate to={"/dashboard"} />




    return (

        <div className="adminlogin-container" >
            <form className="form-main" onSubmit={submitHandler}>
                <p className="form-name">
                    Admin Login :
                </p>

                <div className="input-items">
                    <input type="email" name="email" id="email" placeholder='email' value={updatedState.email} onChange={(e) => dispatch({ type: "SETUSERNAME", value: e.target.value })} required /> <br />
                    <input type="password" name="password" id="password" placeholder='password' value={updatedState.password} onChange={(e) => dispatch({ type: "SETPASSWORD", value: e.target.value })} required /> <br />

                    <div className="form-button">
                        <button type='submit'>Login</button>
                    </div>
                </div>

            </form>


        </div>

    )
}

export default Adminlogin
