import React, { useEffect, useState } from 'react'
import library from '../images/library.jpg'
import BuyBookList from './BuyBookList'
import { useAuth } from '../AuthComponent/AuthFile';

function Home({ addToCart, cart }) {
  const auth = useAuth();
  return (
    <>
      <div style={{ backgroundColor: "red", background: `url(${library})`, backgroundSize: "cover", height: "84vh" }} className='mb-3 ' />

      {auth.role === 'student' && auth.isLoggedIn && (
        <BuyBookList addToCart={addToCart} cart={cart} />)}
    </>
  )
}

export default Home