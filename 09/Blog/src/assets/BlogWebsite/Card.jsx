import "./BlogCSS/Card.css"

function Card(props) {
  return (
    <div className="container">
      <div className="card">
  <img src={props.img} className="card-img-top" alt="img"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <a href={props.href} className="btn btn-primary">{props.BtnText}</a>
  </div>
</div> 
    </div>
  )
}

export default Card