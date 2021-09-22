import React from 'react'
import useAuth from '../customHooks/useAuth'
import { useHistory } from 'react-router-dom';

const UserPage = () => {
      const auth = useAuth()
      const historial = useHistory()
      const {user} = auth
      
      const cerrarSesion = () =>{
         auth.logout()
         historial.push('/')
      }

    return(
        <div className="user-container">
            <h1 className="title">Admin en sesion: {user.username}</h1>
            <button className="close-sesion" onClick={(e)=>{cerrarSesion()}}>Cerrar sesion</button>
            <img className="user-logo" alt="logo" src="https://www.keepsmiling.com.ar/images/logo-KS.svg" />
        </div>
    )
}

export default UserPage