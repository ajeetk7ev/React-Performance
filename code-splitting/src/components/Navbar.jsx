import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div >
         <nav>
            <Link to={'./profile'}>Profile</Link>
            <Link to={'./contact'}>Contact Us</Link>
            <Link to={'./faqs'}>FAQs</Link>
            <Link to={'./about'}>About</Link>
         </nav>
    </div>
  )
}

export default Navbar