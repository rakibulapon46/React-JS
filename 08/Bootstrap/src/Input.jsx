import { Component } from "react";

export default class Input extends Component {

  state = {
    firstName:"",
    lastName:"",
    category:"",
    CreationDate:"",
    About:"",
    gender:"",
    checkbox:true
  }

  formChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  checkBoxHandler = (event) => {
    this.setState({
      checkbox: event.target.checked,
    });
  };
  render() {
    const {firstName, lastName, category, CreationDate, About, checkbox } = this.state
    return (
      <div className="container">
        <input
          type="text"
          name="firstName"
          placeholder="Enter your first name here"
          className="form-control"
          onChange={this.formChange}
          value={firstName}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Enter your last name here"
          className="form-control"
          onChange={this.formChange}
          value={lastName}
        />
        <br />
        <select name="category" onChange={this.formChange} className="form-control" value={category}>
          <option value="Select">Select</option>
          <option value="Programming">Programming</option>
          <option value="Education">Education</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Development">Development</option>
        </select>
        <br />
        <input
          type="date"
          name="CreationDate"
          className="form-control"
          onChange={this.formChange}
          value={CreationDate}
        />
        <br />
        <textarea
          name="About"
          placeholder="Tell me about yourself"
          className="form-control"
          onChange={this.formChange}
          value={About}
        ></textarea>
        <br />
        <input type="radio" name="gender" value="male" onChange={this.formChange} />
        <label htmlFor="gender">male</label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={this.formChange}
        />
        <label htmlFor="gender">female</label>
        <br />

        <input type="checkbox" name="checkbox" onChange={this.checkBoxHandler} checked={checkbox} />
        <label htmlFor="checkbox">I agree to the terms and conditions</label>
        <br />
        <button type="submit" className="btn btn-primary" onClick={() => console.log(this.state) }>
          Submit
        </button>

      </div>
    );
  }
}
