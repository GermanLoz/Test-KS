import React from 'react'
import {BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from './routes/privateRoute.jsx'
import PublicRoute from './routes/publicRoute.jsx'
import Inicio from './pages/HomePage.jsx'
import DatosPage from './pages/DatosPage.jsx'
import UserPage from './pages/UserPage.jsx'
import SearchPage from './pages/SearchPage.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

function AppRouters() {
    return (
        <div>
           <Router>
              <Header/>  
                <Switch>
                    <PublicRoute exact path ="/" component={Inicio}></PublicRoute>
                    <PrivateRoute path ="/Admin" component={DatosPage}></PrivateRoute>
                    <PrivateRoute path ="/user" component={UserPage}></PrivateRoute>
                    <PrivateRoute exact path ="/search/:keyword/:option/" component={SearchPage}></PrivateRoute>
                </Switch>
                <Footer/>
           </Router>
         </div>
       );
}

export default AppRouters