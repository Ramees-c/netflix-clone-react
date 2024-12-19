import React, { useEffect, useState } from "react";
import "./RowPosters.css";

import axios from "axios";
import {BASE_URL,API_KEY, imageUrl} from "../../Constants/Constants"

function RowPosters({title,ismall,url}) {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        console.log(response.data.results)
        setMovies(response.data.results)
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchData();
  }, [])
  
  return (
    <div className="row">
      <h1 className="title">{title}</h1>
      <div className="posters">
        {
       movies &&  movies.map((movie,index) => (
            <img key={index}
          className={ismall?'smallPoster':"poster"}
          src={imageUrl+movie.backdrop_path}
          alt="poster"
        />
          ))
        }
        
      </div>
    </div>
  );
}

export default RowPosters;
