import React, {useState} from 'react'

function NavTotal() {
    const [total, setTotal] = useState(0)

    const users = [{
    //     Func1: () => {
    //         setTotal(total + 1)
    //     },
    //     id: 1
    // },{
        item:"Remove",
        Func: () => {
            setTotal(total - 1)
        },    
        Func1: () => {
                     setTotal(total + 1)
                 },
    }]
    const eleme = users.map(i => {
        return <div>
        </div>
    })
  return (
    <div>
        <p>Total:</p><span>{total}</span>
        {eleme}
    </div>
  )
}

export default NavTotal