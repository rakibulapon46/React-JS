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
      profession: "Web Developer"
      // profession: {
      //   prof1:"Freelance",
      //   prof2: "Web application developer",
      //   prof3: "Content creating"
      // }
    };
  }

  ChangeValue(){
    this.setState({
      profession: "Freelance"
    })
  }

  ChangeMind = this.ChangeValue.bind(this)

  render() {
    return (
      <>
        {/* <h1>{"I'm " + this.state.name + ". I'm " + this.state.age + ". My profession is " + this.state.profession +"."}</h1> */}

        {/* <h1>My profession is {this.state.profession.prof2}</h1> */}

        <h1>My profession is {this.state.profession}</h1>
        <button onClick={this.ChangeMind}>Change Profession</button>
      </>
    );
  }
}

export default About;
