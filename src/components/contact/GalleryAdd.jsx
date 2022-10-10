import React, {useState} from 'react'
import gallery1 from '../gallery/image/gallery-1.jpg'
import gallery2 from '../gallery/image/gallery-2.jpg'
import gallery3 from '../gallery/image/gallery-3.jpg'
import gallery4 from '../gallery/image/gallery-4.jpg'
import gallery5 from '../gallery/image/gallery-5.jpg'
import gallery6 from '../gallery/image/gallery-6.jpg'
import gallery7 from '../gallery/image/gallery-7.jpg'
import gallery8 from '../gallery/image/gallery-8.jpg'
import gallery9 from '../gallery/image/gallery-9.jpg'
import gallery10 from '../gallery/image/gallery-10.jpg'
import gallery11 from '../gallery/image/gallery-11.jpg'
import gallery12 from '../gallery/image/gallery-12.jpg'
import gallery13 from '../gallery/image/gallery-13.jpg'
import gallery14 from '../gallery/image/gallery-14.jpg'
import gallery15 from '../gallery/image/gallery-15.jpg'
import gallery16 from '../gallery/image/gallery-16.jpg'
import '../contact/galleryAdd.css'

function Gallery(props) {
  const [total, setTotal] = useState(0)

  const users = [{
    //     Func1: () => {
    //         setTotal(total + 1)
    //     },
    //     id: 1
    // },{
        add:"Add",
        item:"Remove",
        Func: () => {
            setTotal(total - 1)
        },    
        Func1: () => {
                     setTotal(total + 1)
                 },
    }]

  return (
    <div className='img__overall'>
      <div className='div__overall'>
        <div className='div__all'>
          <span>{total}</span>
          <img src={gallery1} alt="" />
          <p>2000</p>
          <div className='button__div'>
             <button className='button' onClick={() => {
            users[0].Func1()
        }}>{users[0].add}</button>
             <button className='button' onClick={() => {
            users[0].Func()
        }}>{users[0].item}</button>
          </div>
       </div>
       
      </div>

     {/* <div>
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
     </div> */}
    </div>
  )
}

export default Gallery
