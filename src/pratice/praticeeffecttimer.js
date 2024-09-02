// import useGetApiData from "./utils"
import { useEffect, useState } from "react"
function useGetApiData(url){
    
    let [product,setProducts]=useState({});

    useEffect(()=>{ 
      async function getProducts()
      {
      let pro=await fetch(url);
      let productList= await pro.json()
      setProducts(productList)
      console.log(productList)   
      }   
      getProducts()
},[]) 
    return product
   
}
export default function Timer() {
  let data = useGetApiData("https://fakestoreapi.com/products/1")
  return(
    <>
    <h1>Custom Hook</h1>
    <div>{Object.keys(data)}</div>
    <div>{data.title}</div>
    </>
  )  }
