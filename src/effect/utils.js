import { useEffect, useState } from "react"
export default function useGetApiData(url){
    
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