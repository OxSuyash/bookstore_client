import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import axios from 'axios'
import { server } from '../App'
import "../styles/dashusers.scss"
import { Link } from 'react-router-dom'
import Adminmenubar from './Adminmenubar'


const Dashusers = () => {

    const [userList, setUserList] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(()=>{
        const getUsers = async () => {
            try {
                setLoading(true)
                const { data } = await axios.get(`${server}/admin/allusers`, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                })
                setUserList(data.users)
                setLoading(false)
          
            } catch (error) {
                console.log(error)
            }
        }
        getUsers()
    },[])

    return (
        loading ? <Loader /> : <div className="dashusers-container">
            <Adminmenubar/>
            <div className="dashuser-heading">
                user list
            </div>
            {
                userList.map(user => {
                    return (
                        <div className="card" key={user._id}>

                            <div className="blogs">

                                <div className="blog-card">
                                    <div className="blog-title">
                                        <h2>{user.name}</h2>
                                    </div>
                                    <div className="blog-desc">
                                        <p>{user.email} </p>
                                    </div>

                                </div>
                                <div className="blog-desc">
                                    <p>{String(new Date(user.createdAt).toLocaleString())} </p>
                                </div>

                            </div>

                        </div>


                    )
                })
            }
        </div >
    )
}

export default Dashusers