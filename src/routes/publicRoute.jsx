import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import useAuth from '../customHooks/useAuth.jsx'

export default function PublicRoute({component:Component, ...Rest}) {
  const auth = useAuth()

    return (
        //NO PERMITIR ACCESO SI EL USUARIO NO ESTA LOGEADO
        <Route {...Rest}>
            {
             ! auth.isLogged() ?
                <Component />
                  : <Redirect to="/SuperHero" />
            }
        </Route>
    )
}
