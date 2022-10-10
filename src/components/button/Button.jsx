import React from 'react';
import { Link } from "react-router-dom"
import "./button.css"

function Button(props) {
    const item = props.link
   console.log(item)
  return (
<div className="button__wrapper">
    
<Link to={item}>
       <button>
        login
       </button>
       </Link>

</div>
  )
}

export default Button