import UserContext3 from "./UserContext3"
import { useContext } from "react"
import { UserComponent } from './UseContext';


function UserContext2() {
    const user = useContext(UserComponent)
  return (
    <div className="box">
      <h1>UserComponent2</h1>
      <h2>{`Hi ${user}`}</h2>
      <UserContext3 />
    </div>
  )
}

export default UserContext2