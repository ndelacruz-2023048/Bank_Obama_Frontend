import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Layout } from '../layout/Layout'
import { SummaryAccountPage } from '../Page/SummaryAccountPage'
import { ServicesBankPage } from '../Page/ServicesBankPage'
import { ProductBankPage } from '../Page/ProductBankPage'
import { TransactionBankPage } from '../Page/TransactionBankPage'
import { TransactionBankFormPage } from '../Page/TransactionBankFormPage'

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
                element:<ProductBankPage/>
            },
            {
                path:"transactions",
                element:<TransactionBankPage/>
            },
            {
                path:"transactions/new",
                element:<TransactionBankFormPage/>
            },
        ]
    }
])


const MyRoutes = ()=><RouterProvider router={router}/>

export default MyRoutes