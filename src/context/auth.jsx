import {createContext, useState, useEffect} from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

//Obtener user del Local Storage en caso de no haber retorna null

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )
    const [matriz, setMatriz] = useState([])


    useEffect(() => {
        try{ 
            window.localStorage.setItem("user", JSON.stringify(user))
        } catch (error){
            window.localStorage.removeItem("user");
        }
    },[user])

    //Contexto con funciones

    const contextValue = { 
        user,
        matriz,

        //login y guardar sesion en local storage
        login(username, status){
            setUser({status:status, username:username ? username : false})           
        },                                                          
        //cerrar sesion
        logout(){
            setUser(null)
        },
        isLogged(){
            return !!user
        },
        //crear contexto con matriz 
        addMatriz(data){
            setMatriz(data)
        },
        matriz(){
            return matriz
        }
    }
    return <AuthContext.Provider value={contextValue}>
                {children}
           </AuthContext.Provider>
}
export default AuthProvider;