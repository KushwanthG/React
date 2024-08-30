import axios from "axios";
import React, { useState } from "react";



const MyFoodList=()=>{
  const [search,setSearch]=useState('');
  const [data,setData]=useState([]);
  const mykey = '4f39500dd3574d0e9fdfb91a1c6e3659';


  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
        const response=await axios.get(`https://api.spoonacular.com/recipes/complexSearch`,
            { params: {
                query:search,number :10,apiKey:mykey
            }});
                setData(response.data.results)
            console.log(response.data.results)

    }catch(error){
            console.log("errorrrrrrrrrrrrrrrrrrr",error);
    }}


    const Result=({d})=>{
        return(
            <>
            {d.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={item.image} alt="Card cap" />
                <div className="card-body">
                  <center>
                    <h5 className="card-title">{item.title}</h5>
                    <a href={`https://spoonacular.com/recipes/${item.title.replace(/ /g, '-')}-${item.id}`} className="btn btn-primary"> 
                      View Recipe
                    </a>
                  </center>
                </div>
              </div>
            </div>
          ))}
            </>
        )
    }
 

  return(
    <>
    <form onSubmit={handleSubmit}>
      <h1>FoodList</h1>
      <input type='text' value={search} onChange={(e)=>{setSearch(e.target.value)}}></input>
      <br/>
      <input type="submit" className='btn btn-primary' />
    </form>
    {data && data.length>0? <Result d={data}/>:null}
    </>
  )

}

export default MyFoodList