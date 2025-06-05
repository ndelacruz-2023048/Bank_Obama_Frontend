import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Layout } from '../layout/Layout'
import { SummaryAccountPage } from '../Page/SummaryAccountPage'
import { ServicesBankPage } from '../Page/ServicesBankPage'

const router  = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"",
                element:<SummaryAccountPage/>
            },
            {
                path:"services",
                element:<ServicesBankPage/>
            },
            {
                path:"products",
                element:<ServicesBankPage/>
            }
        ]
    }
])


const MyRoutes = ()=><RouterProvider router={router}/>

export default MyRoutes