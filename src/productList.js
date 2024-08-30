import  { useContext } from "react"
import { LoginContext } from "./context/loginContextProvider"

export default function ProductList(){
    let login = useContext(LoginContext)
    console.log(login)
    return <h1>THIS IS value:{login}</h1>
    
}