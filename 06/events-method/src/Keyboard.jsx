function Keyboard() {
  const onKeyDownText = () => {
    console.log('you down a key');
  }
  const onKeyUpText = () => {
    console.log('you up a key');
  }
  const onKeyPressText = () => {
    console.log('you up a key');
  }
  return (
    <>
      <h1>keyboard events</h1>
      <input type="text" onKeyDown={onKeyDownText} placeholder="down keys" /><br /><br />
      <input type="text" onKeyUp={onKeyUpText} placeholder="up keys" /> <br /><br />
      <input type="text" onKeyPress={onKeyPressText} placeholder="press keys" />
    </>
  );
}

export default Keyboard;
