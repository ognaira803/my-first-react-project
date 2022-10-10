import React from 'react';
import "./button.css"
import { Link } from "react-router-dom"
function Buttontwo(props) {
    let lib = props.Link
    console.log(lib)
  return (
    <div className="button__wrapper">
        <Link to={lib}>
        <button>
        About us
        </button>
        </Link>
    </div>
  )
}

export default Buttontwo