import React from 'react'
// import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'

const LayoutOne = () => {
  return (
    <>
          <div className="flex">
        <Sidebar />
        <div className="md:ml-0 flex-1">
          <Outlet />
        </div>
      </div>
  </>
  )
}

export default LayoutOne