import React,{ createContext} from 'react'

export const LoginContext=createContext();
let a="true"

export default function LoginContextProvider({pro}){
  console.log(a)
  return (
    <LoginContext.Provider value={a}>
        {pro}
    </LoginContext.Provider>
  )
}
