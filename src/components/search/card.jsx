import React from 'react'

const Card = (Props) =>{
    const{paciente, odontologo, placas, inicio, fin, setModal, id} = Props
    return(
        <div className="card">
            <div className="card-contenido">
            <p>Paciente: {paciente}</p>
            <p>Odontólogo: {odontologo}</p>
            <p>Placas: {placas}</p>
            <p>Inicio: {inicio}</p>
            <p>Fin: {fin}</p>
            </div>
            <button className="editar" onClick={(e)=>{setModal(id)}}
                    ><i className="far fa-edit"></i></button>
        </div>
    )
}
export default Card