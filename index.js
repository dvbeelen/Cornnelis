const rnn = ml5.charRNN('model/CoRNNelis', modelLoaded);

window.onload=function(){
  const sendInput = document.querySelector("#sendInput")
  const input = document.querySelector("#input")
  const sentenceLength = document.querySelector("#sentenceLength")
  sendInput.addEventListener("click", generateText)
}
  
//Let the user know the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
}

//Genereta new text, take the given input and length as variables
function generateText(){
  let givenText = input.value
  let givenLength = sentenceLength.value
  console.log(givenText)
  rnn.generate(
    {   
      seed: givenText,
      length: givenLength,
      temperature: 0.5, 
    }, 
    (err, results) => {
      if (err){
        console.log(err)
      } 
      else {
        document.getElementById("result").innerHTML = results.sample
      }
    }
  );  
}
