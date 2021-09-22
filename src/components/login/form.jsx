import React, {useState} from 'react'
import validateForm from './validateForm.jsx'

const Form = (Props) =>{
    const {setUser} = Props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

/* Validar campos con una function exportada y redirigir o mostrar error*/
    const validarCampos = (e) => {
        e.preventDefault()
        const resultado = validateForm(email, password)
            if(resultado.status === true){
                setUser(resultado)
            } else {

            }
    } 

    return(
        <>
            <form onSubmit={(e)=>{validarCampos(e)}} className="form">
                <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" name="email"/>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" name="password" />
                <input onSubmit={(e)=>{validarCampos(e)}} type="submit" value="Login"/>
            </form>
        </>  
    )
} 

export default Form