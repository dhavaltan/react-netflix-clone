import React from 'react'
import './home.css'
import requests from './Requests'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'

function Home() {
  return (
    <div className='home'>
        <Nav />
        
        <Banner />

        <Row 
            title="Trending Now"
            fetchUrl={requests.fetchTrending}
        />
        <Row 
            title="Top Rated"
            fetchUrl={requests.fetchTopRated}
        />
        <Row 
            title="Action Movies"
            fetchUrl={requests.fetchActionMovies}
        />
        <Row 
            title="Comedy Movies"
            fetchUrl={requests.fetchComedyMovies}
        />
        <Row 
            title="Horror Movies"
            fetchUrl={requests.fetchHorrorMovies}
        />
        <Row 
            title="Romance"
            fetchUrl={requests.fetchRomanceMovies}
        />
        <Row 
            title="Documentries"
            fetchUrl={requests.fetchDocumentries}
        />
    </div>
  )
}

export default Home