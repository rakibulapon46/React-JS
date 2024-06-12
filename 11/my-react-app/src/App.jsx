import "./App.css";
import Button from "./Button";
import Counter from "./Counter";
import List from "./List";
import MyComponent from "./MyComponent";
import OnChange from "./OnChange";
import ProfilePicture from "./ProfilePicture";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import ColorChanger from './ColorChanger';
import ObjectState from "./ObjectState";
import ArrayState from "./ArrayState";
import ArrayOfObject from "./ArrayOfObject";
import ToDoList from "./ToDoList";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 52 },
    { id: 2, name: "orange", calories: 47 },
    { id: 3, name: "coconut", calories: 354 },
    { id: 4, name: "banana", calories: 89 },
    { id: 5, name: "pineapple", calories: 50 },
  ];
  const vegetables = [
    { id: 1, name: "broccoli", calories: 28 },
    { id: 2, name: "corn", calories: 97 },
    { id: 3, name: "potato", calories: 83 },
    { id: 4, name: "carrot", calories: 33 },
    { id: 5, name: "beans", calories: 105 },
  ];
  return(
    <>
       {/* <Student name="Apon" age={18} isStudent={true} />
      <Student />
      <hr />
      <UserGreeting isLoggedIn={false} username="Apon" />
      <hr />
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
      <hr />
      <Button/>
      <ProfilePicture/>
      <hr /> 
      <MyComponent/>
      <hr />  
      <Counter/>
      <hr /> 
      <OnChange/>
      <hr /> 
      <ColorChanger/>
      <hr/> 
      <ObjectState/>
      <hr /> 
      <ArrayState/> 
      <hr />
      <ArrayOfObject/>
      <hr />  */}
      <ToDoList/>
    </>
  )
}
export default App