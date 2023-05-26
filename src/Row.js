import React, { useState, useEffect } from 'react'
import './row.css'
import axios from './axios'

const base_url = "https://image.tmdb.org/t/p/original/"

function Row(props) {

const [movies, setMovies] = useState([])

function fetchData() {
    props.fetchUrl && axios.get(props.fetchUrl)
    .then((res) => {
        setMovies(() => res.data.results)
    })
    .catch((err => console.log(err)))
}

useEffect(() => {
    fetchData()
}, [props.fetchUrl])

  return (
    <div className='row'>
        <h1 style={{color: 'white'}}>{props.title}</h1>
        <div className='row_posters'>
        {movies.map((movie) => (
            <img key={movie.id} className='row_poster' src={`${base_url}${movie.poster_path}`} alt={movie.name} />
        ))}
        </div>
    </div>
  )
}

export default Row