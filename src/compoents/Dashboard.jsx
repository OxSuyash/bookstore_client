import React, { useEffect, useState } from 'react'
import "../styles/Dashboard.scss"
import axios from 'axios'
import { server } from '../App'
import gear from "../assets/gear2.png"
import Loader from './Loader'
import { Link, Navigate } from 'react-router-dom'


const Dashboard = () => {

  const [books, setBooks] = useState([])
  const [userList, setUserList] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(true)


  useEffect(() => {
    const getBooks = async () => {
      try {
        setIsLoggedIn(true)
        const { data } = await axios.get(`${server}/admin/book/all`, {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        })
        setBooks(data.books)

      } catch (error) {
        console.log(error)
        setIsLoggedIn(false)

      }
    }
    getBooks()
  }, [books])



  

  if(!isLoggedIn) return <Navigate to={"/admin"} />
  return (

    books.length <= 0 ? <Loader /> : (
      <div className="dash-main">
        <div className="left-dash">
          <div className="admin-nav">
            <Link to={"/dashboard/users"} ><button className='admin-btn' >All Users</button></Link>
            <Link to={"/dashboard/books"} ><button className='admin-btn' >All Books</button></Link>
            <button className='admin-btn'>+Book</button>
            <button className='admin-btn'>Pending Orders</button>
          </div>



        </div>
        <div className="dashboard-container">
          <div className="dashboard-heading">
            <p>List of published books</p>
          </div>
          {
            books.slice(0, 5).map(book => {
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
      </div>
    )

  )
}

export default Dashboard