import { useState, useEffect, useRef } from "react"


function MyRef() {
    // const [number, setNumber] = useState(0);
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    // console.log(ref)

    useEffect(() => {
        console.log("Component rendered")
    })

    function handleClick1(){
        // setNumber(n => n + 1)
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow"
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = "yellow"
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = "yellow"
    }

  return (
    <div>
        <button onClick={handleClick1}>Click Me</button>
        <input ref={inputRef1} />

        <button onClick={handleClick2}>Click Me</button>
        <input ref={inputRef2} />
        <button onClick={handleClick3}>Click Me</button>
        <input ref={inputRef3} />
    </div>
  )
}

export default MyRef