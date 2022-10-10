import React from 'react'

function Childadd(props) {
    const addItems = props.increase 
    const item = props.item
    console.log(addItems)
  return (
    <div>
                <button onClick={() => {
            addItems()
        }}
        style={
            {
                borderColor: "blueviolet",
                fontSize:"20px",
                borderWidth:"10px",
                color:"black"
            }
        }>
       {item}
        </button>

    </div>
  )
}

export default Childadd