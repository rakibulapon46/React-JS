import './Style.css'
import StyleModule from './Style.module.css'

function Styles() {
  const ElementOne = {
    color: "red",
    backgroundColor: "green",
    textAlign: "center",
    margin: "0"
  };

  return (
    <div>
      <h1 style={ElementOne}>Inline css</h1>
      <p>This 2nd p</p>
      <h2 className="title">Hello world</h2>
      <hr />
      <h1 className= {StyleModule.title}> Css Module</h1>      
      <h1 className= {StyleModule.sub_title}> Css Module</h1>      
    </div>
  );
}

export default Styles;
