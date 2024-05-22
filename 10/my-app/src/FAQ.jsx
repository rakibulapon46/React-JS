import { useState } from "react"

function FAQ() {
    const [toggler, setToggler] = useState(false);
  return (
    <div className="container">
        click  here to show
        <button className="btn btn-primary ms-3" onClick={() => {
            setToggler(!toggler)
        }}>
            {toggler ? "hide" : "show"}
        </button>
        {toggler &&
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ullam at quod unde, numquam aliquam!</p>
        }
    </div>
  )
}

export default FAQ