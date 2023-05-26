import React from 'react'

function Modal(props) {
  return (
    <>
    <div className='modal_wrapper' onClick={props.closeModal}></div>
    <div className='modal_container'>
        <div className='modal_close' onClick={props.closeModal}>X</div>
        <img className='modal_poster' src={`https://image.tmdb.org/t/p/w342/${props.movie.poster_path}`}  alt="Poster unavailable"/>
        <h4>{props.movie?.name || props.movie?.original_title || props.movie?.title}</h4>
        <h6>{props.movie?.release_date || props.movie?.first_air_date}</h6>
        <h6>{props.movie?.overview}</h6>
    </div>
    </>
  )
}

export default Modal