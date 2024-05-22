function MyChild(props) {
    props.onMethod("Hello world")
  return (
    <div className="container">
        <h2>this is h2 tag</h2>
        <h4>{props.Title}</h4>
    </div>
  )
}

export default MyChild