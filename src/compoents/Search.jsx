import React, { useState } from 'react'
import "../styles/Search.scss"
import axios from 'axios'
import { server } from '../App'


const Search = () => {
    const [title,setTitle] = useState("")
    const [results, setResults] = useState([])

    const getBooks = async (e) => {
      e.preventDefault()
        try {
            const { data } = await axios.post(`${server}/user/book/search`, {
                title
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                })
                setResults(data.book)

        } catch (error) {
            console.log(error.response.data.message)

        }
    }


    return (
        <div className="search-container">
            <form className="form-main" onSubmit={getBooks}>
                <p className="form-name">
                    Search
                </p>

                <div className="input-items">


                    <input type="text" name="search" id="search" placeholder='search for a book' value={title} onChange={(e) => setTitle(e.target.value)} required /> <br />


                    <div className="form-button">
                        <button type='submit' >Search</button>
                    </div>
                </div>

            </form>

            <p>Results...</p>

            {
                results.map(book => {
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

                                </div>

                            </div>


                        </div>
                    )
                })
            }
        </div>
    )
}

export default Search