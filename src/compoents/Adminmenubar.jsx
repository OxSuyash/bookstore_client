import React from 'react'
import { Link } from 'react-router-dom'

const Adminmenubar = () => {
  return (
    <div className="left-dash">
          <div className="admin-nav">
            <Link to={"/dashboard/users"} ><button className='admin-btn' >All Users</button></Link>
            <Link to={"/dashboard/books"} ><button className='admin-btn' >All Books</button></Link>
            <Link to={"/dashboard/newbook"} ><button className='admin-btn'>+Book</button></Link>
            <Link to={"/dashboard/pending"} ><button className='admin-btn'>Pending Orders</button></Link>
          </div>



        </div>
  )
}

export default Adminmenubar