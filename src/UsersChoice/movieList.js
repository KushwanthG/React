import axios from 'axios';
import React,{useState} from 'react'

const MovieList = () => {
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`);
      setData(response.data.Search); 
      console.log(response);
      console.log(response.data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
  const download = url => {
    fetch(url).then(response => {
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png");
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
        <center>
          <h1>Search Your Favorite Movie</h1>

          <form onSubmit={submitHandler}>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/><br /><br />
            <input type="submit" value="Search" />
          </form>

          <div className="row" >
          {data.length>=1 ?
          data.map(movie=>
          <div className="col-md-4" key={movie.imdbID}>
            <div className="card" style={{"width": "18rem"}}>
              <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
              <div className="card-body">
                <h4 className="card-title">{movie.Title}</h4>
                <a className="btn btn-primary" onClick={()=>download(movie.Poster)}>Download Poster</a>
              </div>
            </div>
          </div>
            ): null}
            </div>
        </center>
    </div>
  )
}

export default MovieList