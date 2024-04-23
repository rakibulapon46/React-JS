function Focus() {
    const onFocusText = () => {
        console.log('You focus on your input')
    }
    const onBlurText = () => {
        alert('Blur your input')
    }
  return (
    <>
    <input type="text" onFocus={onFocusText} placeholder="Focus here"></input>
    <br /><br />
    <input type="text" onBlur={onBlurText} placeholder="Blur here"></input>
    </>
  )
}

export default Focus