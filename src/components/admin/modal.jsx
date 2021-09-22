import React, { useState } from 'react'

const Modal = (Props) => {
    const {id, setModal, data, setDatosAdmin} = Props
    const [paciente, setPaciente] = useState('')
    const [odontologo, setOdontologo] = useState('')
    const [placas, setPlacas] = useState('')
    const [inicio, setInicio] = useState('')
    const [fin, setFin] = useState('')
    
    const editar = (e) => {
        e.preventDefault()
        // crear nuevo array mapeando y retornando el update 
        const newArray = data.map((item)=>{
                if(item.id === id){
                    return {
                        ...item,
                        paciente: paciente,
                        odontologo: odontologo,
                        placas: placas,
                        inicio: inicio,
                        fin: fin ,
                    }
                }
                return item 
            })
            //setear nuevo array
            setDatosAdmin(newArray)
            //cerrar modal
            setModal(false)
    }    

    return (
        <div className="modal-admin">
            <button onClick={(e)=>{setModal(false)}} className="back"><i className="fas fa-angle-double-left"></i></button> 
            <form onSubmit={(e)=>{editar(e)}} className="form">
                <input onChange={(e)=>setPaciente(e.target.value)} type="text" placeholder="Paciente"/>
                <input onChange={(e)=>setOdontologo(e.target.value)} type="text" placeholder="Odontologo"/>
                <input onChange={(e)=>setPlacas(e.target.value)} type="number" placeholder="Placas"/>
                <input onChange={(e)=>setInicio(e.target.value)} type="text" placeholder="Inicio"/>
                <input onChange={(e)=>setFin(e.target.value)} type="text" placeholder="Fin"/>
                <input onSubmit={(e)=>{editar(e)}} type="submit" value='EDITAR'/>
            </form>
        </div>
    )
}

export default Modal