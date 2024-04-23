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
    }, 1000);
  }
  const onPasteText2 = () => {
    document.write('Text Pasted successfully')
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
      <br />
      <br />
      <input type="text" placeholder="2nd input" onPaste={onPasteText2}/>
    </>
  );
}

export default Clipboard;
