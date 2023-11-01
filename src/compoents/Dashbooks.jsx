import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import axios from 'axios'
import { server } from '../App'
import { Link } from 'react-router-dom'
import Adminmenubar from './Adminmenubar'


const Dashbooks = () => {

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getBooks = async () => {
            try {
                setLoading(true)
                const { data } = await axios.get(`${server}/admin/book/all`, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                })
                setBooks(data.books)
                setLoading(false)

            } catch (error) {
                console.log(error)
            }
        }
        getBooks()
    }, [])


    return (
        loading ? <Loader /> : <div className="dashbooks-container">
            <Adminmenubar/>
            <div className="dashbooks-heading">
                book  list
            </div>
            {
                books.map(book => {
                    return (
                        <div className="card" key={book._id}>

                            <div className="blogs">

                                <div className="blog-card">
                                    <div className="blog-title">
                                        <h2>{book.title}</h2>
                                    </div>
                                    <div className="blog-desc">
                                        <p>{book.price} </p>
                                    </div>
                                    <div className="blog-desc">
                                        <p>{book.author} </p>
                                    </div>
                                    <div className="blog-desc">
                                        <p>{book.quantity} </p>
                                    </div>
                                    <div className="blog-desc">
                                        <p>{String(new Date(book.createdAt).toLocaleString())} </p>
                                    </div>

                                </div>

                            </div>


                        </div>
                    )
                })
            }
        </div>
    )
}

export default Dashbooks