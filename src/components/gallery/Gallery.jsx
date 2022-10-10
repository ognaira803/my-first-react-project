import React from 'react'
import gallery1 from './image/gallery-1.jpg'
import gallery2 from './image/gallery-2.jpg'
import gallery3 from './image/gallery-3.jpg'
import gallery4 from './image/gallery-4.jpg'
import gallery5 from './image/gallery-5.jpg'
import gallery6 from './image/gallery-6.jpg'
import gallery7 from './image/gallery-7.jpg'
import gallery8 from './image/gallery-8.jpg'
import gallery9 from './image/gallery-9.jpg'
import gallery10 from './image/gallery-10.jpg'
import gallery11 from './image/gallery-11.jpg'
import gallery12 from './image/gallery-12.jpg'
import gallery13 from './image/gallery-13.jpg'
import gallery14 from './image/gallery-14.jpg'
import gallery15 from './image/gallery-15.jpg'
import gallery16 from './image/gallery-16.jpg'
import '../gallery/gallery.css'

function Gallery(props) {
  const addItems = props.increase 
  console.log(addItems)
  return (
    <div className='img__overall'>
     <div>
     <img src={gallery1} alt="" onClick={() => {
            addItems()
        }} />
      <img src={gallery2} alt="" onClick={() => {
            addItems()
        }}/>
      <img src={gallery3} alt="" onClick={() => {
            addItems()
        }}/>
      <img src={gallery4} alt="" onClick={() => {
            addItems()
        }}/>
     </div>
     <div>
     <img src={gallery5} alt="" onClick={() => {
            addItems()
        }}/>
      <img src={gallery6} alt="" onClick={() => {
            addItems()
        }}/>
      <img src={gallery7} alt="" onClick={() => {
            addItems()
        }}/>
      <img src={gallery8} alt="" onClick={() => {
            addItems()
        }}/>
     </div>
     <div>
     <img src={gallery9} alt="" onClick={() => {
            addItems()
        }}/>
      <img src={gallery10} alt="" onClick={() => {
            addItems()
        }}/>
      <img src={gallery11} alt="" onClick={() => {
            addItems()
        }}/>
      <img src={gallery12} alt="" onClick={() => {
            addItems()
        }}/>
     </div>
     <div>
     <img src={gallery13} alt="" onClick={() => {
            addItems()
        }}/>
      <img src={gallery14} alt="" onClick={() => {
            addItems()
        }}/>
      <img src={gallery15} alt="" onClick={() => {
            addItems()
        }}/>
      <img src={gallery16} alt="" onClick={() => {
            addItems()
        }}/>
     </div>
    </div>
  )
}

export default Gallery
