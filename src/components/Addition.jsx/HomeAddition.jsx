import React, {useState} from 'react'
import ChildAddition from './ChildAddition'

function HomeAddition() {
    const [total, setTotal] = useState(0)
    
    // const incrementFunc = () =>{
    //    setTotal(total + 1)
    // }
    // const decrementFunc = () => {
    //     setTotal(total - 1)
    // }

const users = [{
    text:"increment by one",
    Func: () => {
        setTotal(total + 1)
    },
    id: 1
},{
    text:"decrement by one",
    Func: () => {
        setTotal(total - 1)
    },
    id: 2
}]

const elementChild = users.map(i => {
 return <div key={i.id}>
<ChildAddition text={i.text}  increment = {i.Func } />
</div>
})
  return (
    <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"100vh",
        flexDirection:"column"
    }}>
    <span style={{
        display:"flex",
        justifyItems:"center",
        fontSize:20,
        width:"100px"
    }}>
    the total is {total}
    </span>
     {elementChild}
    </div>
  )
}

export default HomeAddition
