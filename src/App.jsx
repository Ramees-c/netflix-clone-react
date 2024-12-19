import { API_KEY, BASE_URL } from "./Constants/Constants";
import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import RowPosters from "./components/RowPosters/RowPosters"

import axios from "axios";


function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <RowPosters title="Netflix Origins" url={`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`} />
      <RowPosters title="Actions" ismall url={`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`}/>
      <RowPosters title="Comedy" ismall url={`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`}/>
      <RowPosters title="Horror" ismall url={`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`}/>
      <RowPosters title="Documentaries" ismall url={`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`}/>
    </div>
  )
}

export default App