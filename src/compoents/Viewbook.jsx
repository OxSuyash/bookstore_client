import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { server } from '../App'
import toast from 'react-hot-toast'


const Viewbook = () => {
    const [book, setBook] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        const getBook = async () => {
            const {data} = await axios.get(`${server}/user/book/${id}`, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            setBook(data.book)
        }
        getBook()
    },[])

    const addtoWishlist = async () =>{
        try {
            const {data} = await axios.put(`${server}/user/addwishlist/${id}`,{},  {
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

    const orderBook = async () =>{
        try {
            const {data} = await axios.put(`${server}/user/book/order/${id}`,{},  {
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
    <div className="book-page">
        <div className="book-title">{book.title}</div>
        <div className="book-author">{book.author}</div>
        <div className="book-price"> {book.price} </div>
        <div className="book-quantity"> {book.quantity} </div>
        <div className="action-buttons">
            <button className="add-wishlist" onClick={addtoWishlist}>+wishlist</button>
            <button className="order-book" onClick={orderBook}>Buy Book</button>
        </div>
    </div>
  )
}

export default Viewbook