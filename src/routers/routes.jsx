import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Layout } from '../layout/Layout'
import { SummaryAccountPage } from '../Page/SummaryAccountPage'
import { ServicesBankPage } from '../Page/ServicesBankPage'
import { ProductBankPage } from '../Page/ProductBankPage'
import { TransactionBankPage } from '../Page/TransactionBankPage'
import { TransactionBankFormPage } from '../Page/TransactionBankFormPage'
import { ProfilePage } from '../Page/ProfilePage'
import { ClientsBankPage } from '../Page/ClientsBankPage'
import { DepositsBankPage } from '../Page/DepositsBankPage'
import { LoginPage } from '../Page/LoginPage'
import { ProtectedRoutes } from '../hooks/ProtectedRoutes'
import { RegisterForm } from '../components/organimos/forms/RegisterForm'

const router  = createBrowserRouter([
    {
        path:"/",
        element:(
            <ProtectedRoutes accesBy="authenticated">
                <Layout/>
            </ProtectedRoutes>
        ),
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
            {
                path:"profile",
                element:<ProfilePage/>
            },
            {
                path:"clients",
                element:<ClientsBankPage/>
            },
            {
                path:"deposits",
                element:<DepositsBankPage/>
            },
        ]
    },
    {
        path: '/login',
        element: (
            <ProtectedRoutes accesBy="non-authenticated">
                <LoginPage/>
            </ProtectedRoutes>
        )
    },
    {
        path:"register",
        element:<RegisterForm/>
    },
])


const MyRoutes = ()=><RouterProvider router={router}/>

export default MyRoutes