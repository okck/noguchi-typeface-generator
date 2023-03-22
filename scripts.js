let userText = document.getElementById("userWords");
let wordTest = document.getElementById("test");
let word = document.getElementById("word");
let userTextValue = userText.value;
let wordTest2 = "";

function submitMyWord() {
  wordTest2 = "";
  console.log(userText.value);
  let string = userText.value;
  console.log(string);
  const myArray = string.split("");
  console.log(myArray);
  for (let i = 0; i < myArray.length; i++) {
// *************link****************
    if (myArray[i] == " ") {
      wordTest2 += "<img class='letter' src=images/space.png>";
    } else if (myArray[i] == "!") {
      wordTest2 += "<img class='letter' src=images/excl.png>";
    } else {
      wordTest2 += '<a href="https://www.noguchi.org/artworks/collection/view/solar/" target="_blank"><img class="letter" src=images/' + myArray[i] + ".png></a>";
    }
  }
document.getElementById("word").innerHTML = wordTest2;
}