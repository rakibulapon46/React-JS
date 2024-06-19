import { useContext } from "react"
import { UserComponent } from "./UseContext"


function UserContext4() {
    const user = useContext(UserComponent)
  return (
    <div className="box">
      <h1>UserComponent4</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  )
}

export default UserContext4