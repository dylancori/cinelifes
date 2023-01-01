import { useState } from "react"

const Input = ({}) => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <h4>agregar Item</h4>
        <input value={count}  />
        <button>agregar cantidad</button>
    </div>
  )
}

export default Input