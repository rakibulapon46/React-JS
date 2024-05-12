function ControlledComponent() {
    function Submit(e) {
        console.log(e.target.value)
    }
  return (
    <div className="container">
        <input type="text" placeholder="Uncontrolled form" value="" onChange={Submit} />
    </div>
  )
}

export default ControlledComponent