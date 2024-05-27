import {useEffect,useState } from "react"

function ShowImg() {
    const [showImg, setImg] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => setImg(data))
        }, 1000);
    })
  return (
    <div className="container">
        {showImg &&
        <img src={showImg.message} alt="" />
        }
    </div>
  )
}

export default ShowImg