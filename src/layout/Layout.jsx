import React from 'react'
import { Outlet } from 'react-router'
import { Sidebar } from '../components/organimos/sidebar'

export const Layout = ({children}) => {
  return (
    <div className='flex w-full h-screen'>
        <div className='bg-amber-500 w-1/5'>
            <Sidebar/>
        </div>
        <div >
            {children ? children : <Outlet />}
        </div>
    </div>
  )
}
