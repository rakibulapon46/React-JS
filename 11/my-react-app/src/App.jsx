
import './App.css'
import List from './List'
import Student from './Student'
import UserGreeting from './UserGreeting'

function App() {
  return (
    <>
     <Student name="Apon" age={18} isStudent={true}/>
     <Student/>
     <hr />
     <UserGreeting isLoggedIn={false} username="Apon" />
     <hr />
     <List/>
    </>
  )
}

export default App
