// import { useState } from "react";

import Form from "./Form";
import 'bootstrap/dist/css/bootstrap.min.css'
import MyChild from "./MyChild";
import FAQ from "./FAQ";
import UseEffect from "./UseEffect";
import FetchData from "./FetchData";
import ShowImg from "./ShowImg";
import GetData from "./GetData";

function App() {
  // const [Name, setName] = useState("World");
  // const changeName = () => {
  //   setName("Apon");
  // };

  const parentData = "I'm your parent data";
  const dataPass = (data) => {
    console.log(data)
  }
  return (
    <>
      {/* <h1>Hello {Name} </h1>
      <button onClick={changeName}>Change name</button> */}
      <Form/>
      <hr />
      <MyChild Title={parentData} onMethod={dataPass} />
      <hr />
      <FAQ/>
      <hr />
      <UseEffect/>
      <hr />
      <FetchData/>
      <hr />
      <ShowImg/>
      <hr />
      <GetData/>
    </>
  );
}

export default App;