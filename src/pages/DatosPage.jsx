import React, { useState, useEffect, Fragment } from 'react'
import datos from '../components/data.jsx'
import Table from '../components/admin/table.jsx'
import Modal from '../components/admin/modal.jsx'
import Buscador from '../components/search/buscador.jsx'
import useAuth from '../customHooks/useAuth'
import Pagination from '../components/pagination.jsx'

const DatosPage = () => {
    const [modal, setModal] = useState(false)
    const [datosAdmin, setDatosAdmin] = useState([])
    const auth = useAuth()
    const matriz = auth.matriz()
    const [paginaActual, setPaginaActual] = useState(1);
    const [maximoDeTablas] = useState(20);
    
    useEffect(()=>{
        if(datos){
            //setar matriz en un estado
            setDatosAdmin(datos.reverse())
            if(matriz.length === 0){
                //si no hau matriz en el contexto, la seteamos
                auth.addMatriz(datos)
            } else {
                setDatosAdmin(matriz.reverse()) 
            }
        }
    }, [])
    
    const indexOfLastTable = paginaActual * maximoDeTablas;
    const indexOfFirstTable = indexOfLastTable - maximoDeTablas;
    //Dividir array 
    const datosParidos = datosAdmin.slice(indexOfFirstTable, indexOfLastTable);
    //Paginar
    const paginate = pageNumber => setPaginaActual(pageNumber);

    return(
        <>
          <h1 className="title">Panel De Administracion</h1>
            <Buscador />    
            {
                modal ?
                    <Modal id={modal} setModal={setModal} data={datosAdmin} setDatosAdmin={setDatosAdmin}/>
                    : ' '
            }
            <div className="tabla">
            {
            window.screen.width > 566 ?  
                <div className="contenido-table" id="titles">
                    <div><p>Paciente</p></div>
                    <div><p>Odontólogo</p></div>
                    <div><p>Cantidad de Placas</p></div>
                    <div><p>Inicio de Tratam</p></div>
                    <div><p>Fin de Tratam</p></div> 
                </div>
                : ' '
            }
                {
                    datosAdmin ?
                    datosAdmin.map(item => {
                        return <Fragment key={item.id}>
                                 <Table paciente={item.paciente} odontologo={item.odontologo} inicio={item.inicio}
                                        placas={item.placas} fin={item.fin} modal={setModal} id={item.id}/>
                               </Fragment>
                    })
                    : ' '
                }
            </div>
            <Pagination maximoDeTablas={maximoDeTablas}
                        tablas={datosAdmin.length}
                        paginate={paginate}
                       />
        </>
    )
}

export default React.memo(DatosPage)
