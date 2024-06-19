import { useState, createContext } from "react"
import UserContext2 from "./UserContext2"

export const UserComponent = createContext();


function UseContext() {
  const [user,setUser] = useState("Apon")
  return (
    <div className="box">
      <h1>UserComponent1</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserComponent.Provider value={user}>
      <UserContext2 user={user}/>
      </UserComponent.Provider>
    </div>
  )
}

export default UseContext