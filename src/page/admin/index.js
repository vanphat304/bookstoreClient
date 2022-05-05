import React from 'react'
import Books from './book'
import Navigation from './navigation'
import {Route} from 'react-router-dom'
import BookForm from './bookForm'

const Admin =()=> {
  return (
    <div
    style={{ position: "relative", width: "100%" }}
    className="my-container"
  >
    <Navigation />
    <div className="main">
      <div className="detail admin">
        <Books/>
        <BookForm/>
      </div>
    </div>
  </div>
  )
}

export default Admin