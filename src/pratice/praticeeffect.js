import axios from "axios";
import React, { useEffect, useState } from 'react';

const Pratice1=()=>{
    const [datas,setData]=useState([]);
    useEffect(()=>{
        const Add=async()=>{
        try{
           let res= await axios.get('https://fakestoreapi.com/products');
           setData(res.data);
           console.log(datas);
        }
        catch(error){
            console.log("errorrrrrr",error)
        }};
        Add();
    },[])
    return(
        <>
        {   datas ?  <ul> { datas.map((item)=>(
            <li key={item.id}>
            <p>{item.title}</p>
            </li>
            ))} </ul>: null
        }
        </>
    )
}
export default Pratice1