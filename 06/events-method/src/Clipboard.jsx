function Clipboard() {
  const copyText = () => {
    alert("Text copied");
  };
  const onCutText = () => {
    console.log("Text cutted successfully");
  };
  const onPasteText = () => {
    let myInput = document.getElementById('myInput');
    setTimeout(() => {
      alert(myInput.value)
    }, 2000);
  }
  return (
    <>
      <p onCopy={copyText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
        nobis illo. Dolores quaerat quia totam ipsa nobis explicabo, earum
        tempore.
      </p>
      <h2 onCut={onCutText}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, est.
      </h2>
      <input type="text" onPaste={onPasteText} id="myInput" placeholder="Enter your text here"/>
      
    </>
  );
}

export default Clipboard;
