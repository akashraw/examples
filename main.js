function onMouseUp(el){
  const actTextarea = document.activeElement;
  const select =actTextarea.value.substring(
    actTextarea.selectionStart, actTextarea.selectionEnd
  );
  const outElement = document.getElementById("output-ele");
  const outText = document.getElementById("output-text"); 
  
  outElement.innerHTML = actTextarea.id;
  outText.innerHTML = select; 
}

const text1 = document.getElementById("example-one");
const text2 = document.getElementById("example-two");
text1.addEventListener('mouseup',onMouseUp,false);
text2.addEventListener('mouseup',onMouseUp,false)

 