import React from 'react'

function ChildAddition(props) {
    const addFunc = props.increment
    const text = props.text
    console.log(addFunc)

  return (
    <div>
        <button onClick={() => {
            addFunc()
        }}
        style={
            {
                borderColor: "blueviolet",
                fontSize:"20px",
                borderWidth:"10px",
                color:"black"
            }
        }>
       {text}
        </button>
    </div>
  )
}

export default ChildAddition