import { Link, Outlet } from "react-router-dom"


export function PraticeHooks(){
    return(
        <>
        <button><Link to="USEEFFECT" >useEffect</Link></button>
        <button><Link to="USECALLBACK" >USECALLBACK</Link></button>
        <button><Link to="USEMEMO" >USEMEMO</Link></button>
        <button><Link to="USEREF" >USEREF</Link></button>
        <Outlet></Outlet>

        </>
    )

}