
function Student(props) {
  return (
    <>
    <div className="student">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>IsStudent: {props.isStudent}</p>
    </div>
    </>
  )
}

export default Student