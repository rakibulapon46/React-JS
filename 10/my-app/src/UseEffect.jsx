import {useEffect, useState} from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Chat ${count}`;

        setTimeout(() => {
            setCount(count + 1)
        }, 1000);
    })
  return (
    <div className='container'>
        <p>You have get {count} notification </p>
    </div>
  )
}

export default UseEffect