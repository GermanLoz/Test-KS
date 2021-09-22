//Filtrar odontologo si incluye dicho string
export default function filtrarOdontologo(odontologo, data){
          const search = data.filter( item => { 
            if(item.odontologo.includes(odontologo)){
                return item
            }
        })
        return search
}