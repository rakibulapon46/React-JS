import './App.css'
import Styles from './Styles'
import StyleCss from './Style.module.css'

function App() {

  return (
    <>
    <p>this is new tag
    </p>
    <p>This is p tag</p>
    <Styles/>
    <hr />
    <h2 className= {StyleCss.title}> This is new css module</h2>
    </>
  )
}

export default App
