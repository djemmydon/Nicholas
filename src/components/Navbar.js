import React, {useState} from 'react'
import './nav.css'

function Navbar() {

    const [openNav, setOpenNav] = useState(true)

    const NavOpening  = () => setOpenNav(!openNav)
    const closeNav  = () =>setOpenNav(false)


  return (
    <nav>
        <div className="navbar">
            <span className="nav-item">Nicholas</span>
            {/* <span className="nav-item">Menu</span> */}


            <ul className={openNav ? "naving active" : "naving"}
            
            >
                
                <li onClick={closeNav}>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            
            <button onClick={NavOpening}>Menu</button>
        </div>

    </nav>
  )
}

export default Navbar