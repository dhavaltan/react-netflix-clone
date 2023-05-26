import React, { useState, useEffect } from 'react'
import './row.css'
import axios from './axios'
import Modal from './Modal'

const base_url = "https://image.tmdb.org/t/p/w342/"

function Row(props) {

const [movies, setMovies] = useState([])
const [showModal, setShowModal] = useState(false)
const [movie, setMovie] = useState();

function fetchData() {
    props.fetchUrl && axios.get(props.fetchUrl)
    .then((res) => {
        setMovies(() => res.data.results)
    })
    .catch((err => console.log(err)))
}

const toggleModal = (movieObj) => {
    if (movie) {
        setMovie(undefined)
    } else {
        setMovie(() => movieObj)
    }
    setShowModal((prevState) => !prevState)
}

useEffect(() => {
    fetchData()
}, [props.fetchUrl])

  return (
    <div className='row'>
        {movies?.length > 0 ? <h1 style={{color: 'white'}}>{props.title}</h1> : null}
        <div className='row_posters'>
        {movies.map((movie) => (
            (movie.poster_path!==undefined && 
            movie.poster_path!==null &&
            movie.poster_path!=='')
            && <img 
            key={movie.id} 
            className='row_poster' 
            src={`${base_url}${movie.poster_path}`} 
            alt={movie.name} 
            onClick={() => toggleModal(movie)}
            />
        ))}
        </div>
        {showModal && <Modal movie={movie ? movie : {}} closeModal={toggleModal} />}
    </div>
  )
}

export default Row