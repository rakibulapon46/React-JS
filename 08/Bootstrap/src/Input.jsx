
function Input() {
  const formChange = (event) => {
    console.log(event.target.name)
  }
  return (
    <div className="container">
    <input type="text" name="firstName"placeholder="Enter your name here" className="form-control" onChange={formChange}/>
    </div>
  )
}

export default Input