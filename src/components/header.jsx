import React, { useState, Fragment , useEffect} from "react"
import { Link } from "react-router-dom";
import useAuth from '../customHooks/useAuth.jsx'

const Header = () => {
  const [menu, setMenu] = useState('nav-ul')
  const auth = useAuth()

//Nav responsive mostrar y ocultarlo
const menuRes = ()=>{
  if(window.screen.width < 566){
    if(menu === 'nav-ul'){
      setMenu('none')
    }
    if(menu === 'none'){
      setMenu('nav-ul')
    }
  }
}

useEffect(()=>{
  if(window.screen.width < 566){
    setMenu('none')
  }
},[])

  return (
     <nav className="nav" id="nav">
          <div className="header-telefono"><strong><i className="fas fa-phone-alt"></i> 0810-777-5881</strong></div>
          <img className="logo" alt="logo" src="https://www.keepsmiling.com.ar/images/logo-KS.svg" />
          <button onClick={menuRes} className="button-menu">
              <i className="fas fa-align-right"></i>
         </button>
       <ul className={menu}>
         {
            auth.isLogged() ? 
                  <Fragment>
                      <li><Link onClick={menuRes} className="link" to='/Admin'>Administrar pasientes</Link></li>
                      <Link onClick={menuRes} to="/User"className="button-user"><strong><i className="far fa-user"></i></strong></Link>
                  </Fragment>
                    : <li><Link onClick={menuRes} className="link" to='/'>Login Panel Control</Link></li>

          }
                 </ul>
          </nav>
  )
}

export default Header;
