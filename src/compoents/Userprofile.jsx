import React, { useEffect, useState } from 'react'
import { server } from '../App'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link, Navigate } from 'react-router-dom'



const Userprofile = () => {
    const [user, setUser] = useState([])
    const [wishList, setWishList] = useState([])
    const [pastOrders, setPastOrders] = useState([])
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    
    

    useEffect(() => {
        
        const getProfile = async () => {
            
            try {
                
                const { data } = await axios.get(`${server}/user/profile`, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                })
                setUser(data.userDetails)
                
                setWishList(data.userWishList)
                setPastOrders(data.pastOrders)
                // console.log(data.userDetails.loginStatus)
                setIsAuthenticated(data.userDetails.loginStatus)
                
               
                
            } catch (error) {
                toast.error(error.response.data.message)
            }
            
            
        }
        getProfile()
    }, [])
    
    // if(isAuthenticated) return <Navigate to={"/login"} />

    


    const logout = async () => {
        try {
            const {data} = await axios.get(`${server}/user/logout`, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            toast.success(data.message)
            
        } catch (error) {
            toast.error(error.response.data.message)
        }
        
    }

    return (
        <div>
            <h2>User Name: {user.userName}</h2>
            <h2>User Email: {user.userEmail}</h2>
            <h2>Login status: {isAuthenticated.toString()}</h2>
            {
                isAuthenticated ? <button onClick={logout} >Logout</button> : <Link to={"/login"} ><button>login</button></Link>
            }
            <div className="wishlist">
                {
                    wishList.map((item, index) => {
                        return (
                            <div className="card" key={index}>

                                <div className="blogs">

                                    <div className="blog-card">
                                        <div className="blog-title">
                                            <h2>Item Id: {item._id}</h2>
                                        </div>
                                        <div className="blog-title">
                                            <h2>Book Name: {item.title}</h2>
                                        </div>
                                        <div className="blog-title">
                                            <h2>Price: {item.price}</h2>
                                        </div>
                                        <div className="blog-title">
                                            <h2>Author: {item.author}</h2>
                                        </div>
                                        <div className="blog-title">
                                            <h2>Items remained: {item.quantity}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="pastorders">
                {
                    pastOrders.slice(0,6).map((item, index) => {
                        return (
                            <div className="card" key={index}>

                                <div className="blogs">

                                    <div className="blog-card">
                                        <div className="blog-title">
                                            <h2>Item Name: {item}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Userprofile
