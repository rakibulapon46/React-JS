import { useState } from "react"

function App() {
  const [Name, setName] = useState("World")
  const changeName = () =>{
    setName("Apon")
  }
  return (
    <>
    <h1>Hello {Name} </h1>
    <button onClick={changeName}>Change name</button>
    </>
  )
}

export default App