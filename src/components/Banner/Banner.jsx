import React, { useEffect, useState } from 'react'
import './Banner.css'

import axios from 'axios'
import {BASE_URL, API_KEY, imageUrl} from "../../Constants/Constants"

function Banner() {

  const [movie, setMovie] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`)
      setMovie(response.data.results[1])
      // console.log(response.data.results[0])
    }
    fetchData();
  }, [])

  
  return (
    <div style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`}} className='banner'>
        <div className="content">
            <h1 className="title">{movie.title}</h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">
                {movie.overview}
            </h1>
            <div className="fade_bottom"></div>
        </div>
    </div>
  )
}

export default Banner