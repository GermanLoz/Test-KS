import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Buscador = (Props) => {
    const [keyword, setKeyword] = useState('')
    const [option, setOption] = useState('paciente')
    const historial = useHistory()
    
    //pasar parametros Url para luego manipularlos en Search Page
    const search =  (e) => {
        e.preventDefault()
        historial.push(`/search/${keyword}/${option}/`)
    }

    return (
        <>
            <form onSubmit={(e)=>{search(e)}} className="buscador">
                <input onChange={(e)=>{setKeyword(e.target.value)}} type="text"/>
                <input onSubmit={(e)=>{search(e)}} type="submit" value="Buscar"/>
                <select onChange={(e)=>{setOption(e.target.value)}} type="categoria" name="categoria">
                    <option value="paciente">Paciente</option>
                    <option value="odontologo">Odontólogo</option>
                </select>
            </form>
        </>
    )
}
export default Buscador