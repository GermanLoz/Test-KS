import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import useAuth from '../customHooks/useAuth.jsx'

export default function PrivateRoute({component:Component, ...Rest}) {
  const auth = useAuth()
    return (
      //PERMITIR EL ACCESO SI ESTA LOGEADO EL USUARIO
        <Route {...Rest}>
            {
             auth.isLogged() ?
                <Component />
                  //SI NO LO ESTA REDIRECCIONAR A LA PAGINA DE LOGIN
                  : <Redirect to="/" />
            }
        </Route>
    )
}
