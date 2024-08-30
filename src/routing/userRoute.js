import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const UserRoute = () => {
  return (
    <>
    <div>
        <button><Link to='orders'>Orders</Link></button>
        <button><Link to='profile'>Profile</Link></button>
    </div>
    <h1>This is User component</h1>
    <Outlet/>
    

    </>
  )
}
export function UserProfile(){
    return(
        <><h1>This is UserProfile</h1></>
    )
}
export function UserOrder(){
    return(
        <><h1>This is UserOrder</h1></>
    )
}

export default UserRoute
