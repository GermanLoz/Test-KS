import React, { useState, useEffect, Fragment} from 'react'
import { useParams } from 'react-router-dom';
import useAuth from '../customHooks/useAuth'
import Card from '../components/search/card.jsx'
import filtrarOdontologo from '../components/search/filtrarOdon.jsx'
import filtrarPaciente from '../components/search/buscarPaciente.jsx'
import Modal from '../components/admin/modal.jsx'
import { useHistory } from 'react-router-dom';

const SearchPage = (Props) => {
    const [modal, setModal] = useState(false)
    const [data, setData] = useState([])
    const [datosAdmin, setDatosAdmin] = useState([])
    const [buscar, setBuscar] = useState([])
    const auth = useAuth()
    const historial = useHistory()
    const params = useParams()
    const key = params.keyword
    const datos = auth.matriz()

    //comprobar opction dependiendo de si es 
    //odontologo o paciente llamamos a una function para filtrar datos
    useEffect(() => {
            setData(datos)
            if(params.option === 'paciente'){
                const result = filtrarPaciente(key,data) 
                setBuscar(result)
            }
            if(params.option === 'odontologo'){
                const resultado = filtrarOdontologo(key,data)
                setBuscar(resultado)
            }
    },[data])

    //Añadir al contexto el update y redireccionar a /admin
    useEffect(()=>{
        if(datosAdmin.length > 0){
            auth.addMatriz(datosAdmin.reverse())
            historial.push('/admin')
        }
    }, [datosAdmin])

    return (
        <div className="page-search"> 
           <h1 className="title">Buscar: {params.keyword}</h1>
            {
                modal ?
                    <Modal id={modal} setModal={setModal} data={datos} setDatosAdmin={setDatosAdmin}/>
                : ' '
            }

           {
            buscar.length > 0 ?
            buscar.map( item => {
                return <Fragment key={item.id}>
                            <Card paciente={item.paciente} odontologo={item.odontologo} placas={item.placas} 
                                params={item.params} inicio={item.inicio} fin={item.fin} id={item.id}
                                setModal={setModal}/>
                        </Fragment>
               })
               : <h2 className="msg"> El dato es escribio mal/no existe </h2> 
           }
        </div>
    )
}
export default SearchPage