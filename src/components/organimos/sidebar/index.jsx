import React from 'react'
import { useLogout } from '../../../hooks/useLogout'

export const Sidebar = () => {
  const { logout } = useLogout()

  const handleLogout = () => {
    logout()
  }

  return (
    <div>
      Sidebar
      <div onClick={handleLogout} >
        <button>
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}
