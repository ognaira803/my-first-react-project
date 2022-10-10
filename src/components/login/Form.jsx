import React from 'react'
import "../../styles/stylesSheet.css"
import Button from '../button/Button'
function Form() {
  return (
    <>
    <form action="https://formspree.io/f/xqknrvwe" method="POST">
    
    <label for="First Name">
        <input type="text" name="First Name" id="First name" placeholder="First Name" required />
    </label>

    <label for="Last Name">
        <input type="text" name="Last Name" id="Last Name" placeholder="Last Name" required />
    </label>

    <label for="Email">
        <input type="email" name="Email" id="Email" placeholder="Email" required />
    </label>

    <label for="Password">
        <input type="password" name="Password" id="password" placeholder="password" required />
    </label>


    <Button link = "/form" />
</form>

    </>

  )
}

export default Form
