import { Component } from "react";
class About extends Component {

  // state = {
  //     name:"Apon",
  //     age: 18,
  //     profession: "Freelance"
  // }
  
  //todo  alternative
  constructor(props) {
    super(props);
    this.state = {
      name: "Apon",
      age: 18,
      profession: "Freelance",
    };
  }
  render() {
    return (
      <>
        <h1>{"I'm " + this.state.name + ". I'm " + this.state.age + ". My profession is " + this.state.profession +"."}</h1>
      </>
    );
  }
}

export default About;
