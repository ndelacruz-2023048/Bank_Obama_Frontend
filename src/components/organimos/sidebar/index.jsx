import React from 'react'
import { useLogout } from '../../../hooks/useLogout'
import { useNavigate } from 'react-router'

export const Sidebar = () => {
  const { logout } = useLogout()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
  }

  const goToTransactions = () => {
    navigate('/transactions')
  }

  const goToNewTransaction =()=>{
    navigate('/transactions/new')
  }

  const goToRegisterForm= ()=>{
    navigate('/register')
  }
  return (
    <div>
      Sidebar
      <div onClick={handleLogout} >
        <button>
          Cerrar sesión
        </button>
      </div>
      <div onClick={goToTransactions}>
        <button>
          Transacciones
        </button>
      </div>
      <div onClick={goToNewTransaction}>
        <button>
          New Transaction
        </button>
      </div>
      <div onClick={goToRegisterForm}>
        <button>
          Register From
        </button>
      </div>
    </div>
  )
}
