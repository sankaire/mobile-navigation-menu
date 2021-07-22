import React, { useState } from 'react'
import './Navbar.css'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const onToogleOpenMobileMenu = () => setIsOpen(!isOpen)
   
    return (
        <div className = "navbar">
            <div className = {isOpen ?"nav-menu" : ""}>
                <h2 className = "logo">
                    TEPE<i>la</i>
                </h2>
                <span className = "nav-links">Home</span>
                <span className = "nav-links">About</span>
                <span className = "nav-links">Contact</span>
                <span className = "nav-links">Blog</span> 
                <div className = 'button' onClick = { onToogleOpenMobileMenu }>
                {isOpen ? (
                        <button>click</button>
                    ) : (
                        <button></button>
                    )
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
