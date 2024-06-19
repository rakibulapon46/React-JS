import UserContext4 from "./UserContext4"
import { useContext } from "react"
import { UserComponent } from "./UseContext"


function UserContext3() {
    const user = useContext(UserComponent)
  return (
    <div className="box">
      <h1>UserComponent3</h1>
      <h2>{`Hello again ${user}`}</h2>
      <UserContext4 />
    </div>
  )
}

export default UserContext3