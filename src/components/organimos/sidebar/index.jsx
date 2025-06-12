import React from 'react'
import { useLogout } from '../../../hooks/useLogout'
import { useNavigate } from 'react-router'

export const Sidebar = () => {
  const { logout } = useLogout()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
  }

  const goProfile = () => {
    navigate('/profile')
  }

  return (
    <div>
      Sidebar
      <div onClick={handleLogout} >
        <button>
          Cerrar sesión
        </button>
      </div>
      <div onClick={goProfile} >
        <button>
          Profile
        </button>
      </div>
    </div>
  )
}
