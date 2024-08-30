import React, { useEffect, useState } from 'react'

const Sampleuseeffect = () => {

    const [usersData,setUsersData]=useState([]);
    const [Loading,setLoading]=useState(false);
    const [isError,setIsError]=useState({status:false, msg:''})

    const URL="https://jsonplaceholder.typicode.com/users";

    const fetchUsersData=async (url)=>{
        setLoading(true)
        setIsError({status:false, msg:''})
        try{
            const response=await fetch(url)
            let data =await response.json()
            setUsersData(data)
            console.log(data)
            setLoading(false)
            setIsError({status:false, msg:''})
        }catch(error){
            console.log(error)
            setLoading(false)
            setIsError({status:true, msg:'Some Error'})
        }
    
    }

    useEffect(()=>{fetchUsersData(URL)},[])

    if(Loading){
        return <div><h1>Loading...</h1></div>
    }

    if(isError?.status){
        return<div><h3 style={{color:'red'}}>Error</h3></div>
    }
  return (
    <div>

      {
        usersData.map((each)=>
        <li key={each.id}>{each.name}</li>
        )
      }
    </div>
  )
}

export default Sampleuseeffect
