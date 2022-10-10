import React from 'react'
import "../navbar/nav.css"
import { Link } from "react-router-dom"
function Navco(props) {
    let lib = props.Link
    console.log(lib)
    return (
      <div>
                <Link to={lib}>
                  <li>Service</li>
                  </Link>
      </div>
    )
  }
  
  export default Navco