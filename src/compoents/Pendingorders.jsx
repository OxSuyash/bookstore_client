import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import Adminmenubar from './Adminmenubar'
import axios from 'axios'
import { server } from '../App'

const Pendingorders = () => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect (()=>{
        const getUsers = async () => {
            try {
                setLoading(true)
                const { data } = await axios.get(`${server}/admin/book/pendingorders`, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                })
                setOrders(data.books)
                setLoading(false)
          
            } catch (error) {
                console.log(error)
            }
        }
        getUsers()
    },[])
  return (
    loading ? <Loader/> : <div className="pendingorders-container">
        <Adminmenubar/>
        <div className="dashuser-heading">
                pending orders
            </div>
            {
                orders.map(order => {
                    return (
                        <div className="card" key={order._id}>

                            <div className="blogs">

                                <div className="blog-card">
                                <div className="blog-title">
                                        <h2>{order.itemName}</h2>
                                    </div>
                                    <div className="blog-title">
                                        <h2>{order.itemId}</h2>
                                    </div>
                                    <div className="blog-title">
                                        <h2>{order.customerId}</h2>
                                    </div>
                                    
                                    <div className="blog-title">
                                        <h2>{order.isShipped}</h2>
                                    </div>

                                </div>
                                <div className="blog-desc">
                                    <p>{String(new Date(order.orderDate).toLocaleString())} </p>
                                </div>

                            </div>

                        </div>


                    )
                })
            }
    </div>
  )
}

export default Pendingorders