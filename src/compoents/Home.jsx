import React, { useEffect, useState } from 'react'
import "../styles/Home.scss"
import { server } from '../App'
import axios from 'axios'


const Home = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      const { data } = await axios.get(`${server}/user/book/all`, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      setBooks(data.books)
    }
    getBooks()
  }, [])
  return (
    <div className="blog-main">
      <div className="blog-page-title">
        <p>Books all</p>
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

                </div>

              </div>


            </div>
          )
        })
      }
    </div>
  )
}

export default Home