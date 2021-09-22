import React from 'react'

const Table = (Props) => {
    const {paciente, odontologo, placas, inicio, modal, fin, id} = Props

    return (
        <>
        { 
            //Hacer que la tabla sea movile
            
            window.screen.width < 566 ?  
                <div className="contenido-table" id="titles">
                    <div><p>Paciente</p></div>
                    <div><p>Odontólogo</p></div>
                    <div><p>Cantidad de Placas</p></div>
                    <div><p>Inicio de Tratam</p></div>
                    <div><p>Fin de Tratam</p></div> 
                </div>
                : ' '
        }
            <div className="contenido-table" >
                    <div className="item"><p>{paciente}</p></div>
                    <div className="item"><p>{odontologo}</p></div>
                    <div className="item"><p>{placas}</p></div>
                    <div className="item"><p>{inicio}</p></div>
                    <div className="item"><p>{fin}</p></div> 
                    <div className="item-editar">
                    <button className="editar" onClick={(e)=>{modal(id)}}
                    ><i className="far fa-edit"></i></button></div>
                </div>
            </>
    )
}

export default Table