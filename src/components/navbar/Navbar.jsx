import React from 'react'
import '../navbar/navbar.css'
import Navab from './Navab'
import Navco from './Navco'
import Navho from './Navho'
function Navbar(props) {
  let lib = props.Link
  console.log(lib)
  return (
    <div>
        <nav>
            <div className="logo">
                <h2>Photo<span>Folio</span></h2>
            </div>
            <div className="menu">
                <Navho Link = "/form" />
                <Navab Link = "/about" />
                <Navco Link = "/contact" />
            </div>
        </nav>
    </div>
  )
}

export default Navbar