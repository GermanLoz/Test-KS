import React, {useState, useEffect} from 'react';
import Form from '../components/login/form.jsx'
import useAuth from '../customHooks/useAuth'
import { useHistory } from 'react-router-dom';

const Inicio = ()=> {
  const historial = useHistory()
  const [user, setUser] = useState(false)
  const auth = useAuth()

//crear login
  const login = () => {
    auth.login(user.id, user.status)
  }

//llamar a function login y redireccionar a ruta /admin
  useEffect(()=>{
    if(user){
        login()
        historial.push('/Admin')
    } 
  },[user])
  

  return (
    <div>
      <h1 className="title">Login Panel Administracion</h1>
      <Form setUser={setUser}/>
    </div>
  );
}

export default Inicio;