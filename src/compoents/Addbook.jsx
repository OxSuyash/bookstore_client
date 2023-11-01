import React, { useState } from 'react'
import axios from 'axios'
import { server } from '../App'
import Adminmenubar from './Adminmenubar'
import toast from 'react-hot-toast'

const Addbook = () => {
    const [status, setStatus] = useState(false)
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [author, setAuthor] = useState("")
    const [quantity, setQuantity] = useState("")
    const newBook = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(`${server}/admin/book/new`, {
                title, price, author, quantity
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            setStatus(true)
            toast.success(data.message)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="addbook-container">
            <Adminmenubar />

            <div className="addbook-main">
                <p>Title</p>
                <form action="" className="new-post-form" onSubmit={newBook}>
                    <input type="text" placeholder='Book Title' value={title} onChange={(e) => setTitle(e.target.value)} required />
                    <input type="text" placeholder='Book Price' value={price} onChange={(e) => setPrice(e.target.value)} required />
                    <input type="text" placeholder='Book Author' value={author} onChange={(e) => setAuthor(e.target.value)} required />
                    <input type="text" placeholder='Book Quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                    <button type="submit">Add Book</button>
                </form>
            </div>
        </div>
    )
}

export default Addbook