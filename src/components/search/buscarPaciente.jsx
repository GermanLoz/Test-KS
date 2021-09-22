//Filtrar paciente si incluye dicho string
export default function filtrarPaciente (pacienteKey, data){
          const search = data.filter( item => { 
            if(item.paciente.includes(pacienteKey)){
                return item
            }
        })
        return search
}