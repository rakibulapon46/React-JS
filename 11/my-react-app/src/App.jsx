
import './App.css'
import Student from './Student'
import UserGreeting from './UserGreeting'

function App() {
  return (
    <>
     <Student name="Apon" age={18} isStudent={true}/>
     <Student/>
     <hr />
     <UserGreeting isLoggedIn={true} username="BroCode" />
    </>
  )
}

export default App
