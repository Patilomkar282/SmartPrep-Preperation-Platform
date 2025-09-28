import React from 'react'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
   <>
    <Header />
      <div className='pt-20 min-h-[calc(100vh-160px)]'>
        <Outlet />
      </div>
    <Footer />
   
   </>
  )
}

export default Layout
