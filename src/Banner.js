import React, { useEffect, useState } from 'react'
import './banner.css'
import requests from './Requests'
import axios from './axios';

function Banner() {

const [movie, setMovie] = useState({});

function fetchData() {
    axios.get(requests.fetchNetflixOriginals)
    .then((res) => {
        setMovie(() => res.data.results[Math.floor(Math.random() * res.data.results.length - 1)])
    })
    .catch((err => console.log(err)))
}

useEffect(() => {
    fetchData();
}, [])

function truncate(string, n) {
    return string?.length > n ? string.substring(0, n-1) + '...' : string;
}    

  return (
    <header className='banner' 
        style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}
    >
        <div className='banner_content'>
            <h1 className='banner_title'>{movie?.name || movie?.title || movie?.original_name}</h1>
            <div className='banner_buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className='banner_description'>
                {truncate( `${movie?.overview}` ,150)}</h1>

        </div>
        <div className='banner--fadeBottom'/>
    </header>
  )
}

export default Banner