import React from 'react'
import "../navbar/nav.css"
import { Link } from "react-router-dom"
function Navho(props) {
    let lib = props.Link
    console.log(lib)
    return (
      <div>
                <Link to={lib}>
                  <li>Home</li>
                  </Link>
      </div>
    )
  }
  
  export default Navho