import { useEffect, useState } from "react"
import DataReturn from "./DataReturn";

function FetchData() {
    const [saveData, setData] = useState(null);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [])

  return (
    <div className="container">
        {saveData &&
            saveData.map((data) => 
                {
                    return <DataReturn name= {data.name}/>
                }
            )
        }
    </div>
  )
}

export default FetchData