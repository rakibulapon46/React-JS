import { useState, useEffect, useRef } from "react"


function MyRef() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("Component rendered")
    })

    function handleClick(){
        setNumber(n => n + 1)
    }

  return (
    <div>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default MyRef