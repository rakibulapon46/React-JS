import UseCustomData from "./UseCustomData"

function GetData() {
  const [data] = UseCustomData('https://jsonplaceholder.typicode.com/users')
  return (
    <div>
      {
        data &&
        data.map((item) => {
          return <p key={item.id}> name: {item.name}.....  address: {item.address.street}</p>
        })
      }
    </div>
  )
}

export default GetData