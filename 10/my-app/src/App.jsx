import { useState } from "react"

const App = () => {
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