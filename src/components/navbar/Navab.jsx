import React from 'react'
import "../navbar/nav.css"
import { Link } from "react-router-dom"
function Navab(props) {
    let lib = props.Link
    console.log(lib)
    return (
      <div>
                <Link to={lib}>
                  <li>About</li>
                  </Link>
      </div>
    )
  }
  
  export default Navab