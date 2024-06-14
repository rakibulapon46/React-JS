import { useState, useEffect } from "react"


function UseEffect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`
  }, [count, color])

  function incrementBtn(){
    setCount(c => c + 1)
  }

  function decrementBtn(){
    setCount(c => c - 1)
  }

  function colorChange() {
    setColor(c => c === "green" ? "red" : "green")
  }

  return (
    <div>
      <p style={{color: color}}>Count: {count}</p>
      <button onClick={incrementBtn} style={{backgroundColor: "lime"}} >Increment</button>
      <button onClick={decrementBtn} style={{backgroundColor: "crimson", marginLeft: "10px"}} >Decrement</button>
      <button onClick={colorChange}  style={{backgroundColor: "Blue", marginLeft: "10px"}}>Color Change</button>
    </div>
  )
}

export default UseEffect