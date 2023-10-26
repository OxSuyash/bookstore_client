import React, { useEffect, useState } from 'react'
import "../styles/Dashboard.scss"
import axios from 'axios'
import { server } from '../App'
import gear from "../assets/gear2.png"
import Loader from './Loader'


const Dashboard = () => {

  const [books, setBooks] = useState([])
  const [userList, setUserList] = useState([])

  const [userBuffer, setUserBuffer] = useState(false)
  const [bookBuffer, setBookBUffer] = useState(false)

  useEffect(() => {
    const getBooks = async () => {
      try {
        const { data } = await axios.get(`${server}/admin/book/all`, {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        })
        setBooks(data.books)

      } catch (error) {
        console.log(error)

      }
    }
    getBooks()
  }, [books])

  const getUsers = async () => {
    try {
      const { data } = await axios.get(`${server}/admin/allusers`, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      setUserList(data.users)
      setBookBUffer(false)
      setUserBuffer(true)
      console.log(userList)
    } catch (error) {
      console.log(error)
    }
  }

  const getBooks = async () => {
    try {
      const { data } = await axios.get(`${server}/admin/book/all`, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      setBooks(data.books)
      setUserBuffer(false)
      setBookBUffer(true)
      console.log(userList)
    } catch (error) {
      console.log(error)
    }
  }

  return (

    books.length <= 0 ? <Loader /> : (
      <div className="dash-main">
        <div className="left-dash">
          <div className="admin-nav">
            <button className='admin-btn' onClick={getUsers}>All Users</button>
            <button className='admin-btn' onClick={getBooks} >All Books</button>
            <button className='admin-btn'>+Book</button>
            <button className='admin-btn'>Pending Orders</button>
          </div>

          <div className="dash-records">
            <div className="users-record">
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
                        <div className="blog-desc">
                          <p>{user._id} </p>
                        </div>

                        <div className="blog-desc">
                          <p>{String(new Date(user.createdAt).toLocaleString())} </p>
                        </div>

                      </div>

                    </div>


                  </div>
                )
              })
            
            }
            </div>
            <div className="books-record">
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