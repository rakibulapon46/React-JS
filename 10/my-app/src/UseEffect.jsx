import {useEffect, useState} from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0)
    useEffect(() => {
        document.title = `Chat ${count}`;
        setCalculation(()=>{
            setCalculation(count * 2)
        })
    }, [count])
  return (
    <div className='container'>
        <p>You have get {count} notification </p>
        <p>Calculation: {calculation}</p>
        <button className='btn btn-primary' onClick={()=>{
            setCount(count + 1)
        }}>Count me</button>
    </div>
  )
}

export default UseEffect