import React from 'react'
import Buttontwo from '../button/Buttontwo'
import "./Home.css"

function Home(props) {
  let lib = props.Link
  console.log(lib)
  const item = "/about"
  return (
    <div className="home__wrapper">
      <h1>I'm Jenny Wilson a Professional</h1>
      <h1>Photographer from New York City</h1>
      <p>Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.</p>
        <Buttontwo Link = {item} />
    </div>
  )
}

export default Home
