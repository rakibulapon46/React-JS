import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitName = (event) => {
    setName(event.target.value);
  };

  const SubmitEmail = (event) => {
    setEmail(event.target.value);
  };

  const SubmitPassword = (event) => {
    setPassword(event.target.value);
  };

  const SubmitAllInfo = (event) => {
    console.log({
        name: name,
        email: email,
        password: password
    });
    // console.log(name, email, password);
    event.preventDefault();
    setName("")
    setEmail("")
    setPassword("")
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center my-2">Registration Form</h1>
        <form action="" className="form" onSubmit={SubmitAllInfo}>
          <div className="row mt-3">
            <div className="col-sm-2">
              <label htmlFor="" className="col-form-label">
                Name:
              </label>
            </div>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
                onChange={SubmitName}
                value={name}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-2">
              <label htmlFor="" className="col-form-label">
                Email:
              </label>
            </div>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email here"
                required
                onChange={SubmitEmail}
                value={email}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-2">
              <label htmlFor="" className="col-form-label">
                Password:
              </label>
            </div>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password here"
                required
                onChange={SubmitPassword}
                value={password}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2 mt-4">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
