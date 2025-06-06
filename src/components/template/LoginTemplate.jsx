import React from 'react'
import { LoginForm } from '../organimos/forms/LoginForm'
import Logo from '../../assets/Logo.jpg'

export const LoginTemplate = () => {
  return (
    <div style={{ backgroundImage: `url(${Logo})` }} className="bg-cover bg-center bg-no-repeat h-screen flex"><LoginForm/></div>
  )
}
