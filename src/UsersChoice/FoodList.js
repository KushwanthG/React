import axios from 'axios';
import React, { useState } from 'react';

const FoodList = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const mykey = '4f39500dd3574d0e9fdfb91a1c6e3659';

  const submitHandler =  async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, 
        { params: 
          { query: search, number: 10, apiKey: mykey} });
      setData(response.data.results);
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const Products = ({ d }) => {
    return (
      <div>
        <div className="row">
          {d.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={item.image} alt="Card cap" />
                <div className="card-body">
                  <center>
                    <h5 className="card-title">{item.title}</h5>
                    <a href={`https://spoonacular.com/recipes/${item.title.replace(/ /g, '-')}-${item.id}`} className="btn btn-primary">
                    {/* g is global flag it will replace the word with - */}
                      View Recipe
                    </a>
                  </center>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <center>
        <h4>Food Recipe App</h4>
        <form onSubmit={submitHandler}>
          <input  type="text" value={search} onChange={ (e) => setSearch(e.target.value) } />
          <br/>
          <input type="submit" className="btn btn-primary" value="Search" />
        </form>
        {data && data.length > 0 ? <Products d={data} /> : null}
      </center>
    </div>
  );
};

export default FoodList;
