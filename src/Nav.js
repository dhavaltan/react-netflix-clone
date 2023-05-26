import React, { useEffect, useState } from 'react'
import './nav.css'

function Nav() {

const [show, setShow] = useState(false);    

const transitionNavbar = () => {
    if (window.scrollY > 100) {
        setShow(true);
    }
    else {
        setShow(false);
    }
}

useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
    return () => window.removeEventListener('scroll', transitionNavbar)
}, [])

  return (
    <div className={`nav ${show ? "nav_black":''}`}>
        <div className='nav_content'>
            <img className='nav_logo' src="https://pngimg.com/uploads/netflix/netflix_PNG25.png" alt='' />
            <img className='nav_avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt='' />
        </div>
    </div>
  )
}

export default Nav