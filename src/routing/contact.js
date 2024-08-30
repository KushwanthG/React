import React from 'react'
import { useLocation, useParams } from 'react-router-dom'


const Contact = () => {

  let {id,name}=useParams();
  let queryparams=useLocation();
  console.log(queryparams)
  let query=new URLSearchParams(queryparams.search)//url is type of object we convert it from search
  let posts=query.get('posts');
  return (
    <>
    <h1>ID :{id}</h1>
    <h1>NAME :{name}</h1>
    <h1>POSTS:{posts}</h1>
    </>
  )
}


export function Mains(){
  return(
    <>
    <h1>This is Main component</h1></>
  )
}

export default Contact
