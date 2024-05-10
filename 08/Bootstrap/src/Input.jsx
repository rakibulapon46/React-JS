
function Input() {
  const formChange = (event) => {
    console.log(event.target.value)
  }
  return (
    <div className="container">
    <input type="text" name="firstName"placeholder="Enter your name here" className="form-control" onChange={formChange}/>
<br />
    <select name="category" onChange={formChange} className="form-control">
      <option value="Select">Select</option>
      <option value="Programming">Programming</option>
      <option value="Education">Education</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Development">Development</option>
    </select>
    <br />
    <input type="date" name="CreationDate" className="form-control" onChange={formChange}/>
    <br />
    <textarea name="About" placeholder="Tell me about yourself" className="form-control" onChange={formChange}></textarea>
    <br />
    <input type="radio" name="gender" value="male" onChange={formChange}/>
    <label htmlFor="gender">male</label>
    <input type="radio" name="gender" value="female" onChange={formChange}/>
    <label htmlFor="gender">female</label>

   <input type="checkbox" name="lastName" />
    </div>
  )
}

export default Input