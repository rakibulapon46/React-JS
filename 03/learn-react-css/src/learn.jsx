
function Learn(ContactProps) {
  let styles = {
      fontSize: '20px',
      padding: '10px 20px',
      backgroundColor: '#41c2fe',
      color: 'white',
      borderRadius: '5px',
      border: '2px solid #41c2fe',
      cursor:' pointer',
  }
  return (
   <>
   <div>My name is {ContactProps.name} and my number is {ContactProps.number} 
<br />
<button style={styles}>Click here</button>
</div>
   </>
  )
}

export default Learn