
var theRightAnswer = 8;




function guessButtonClicked() {
    var numberweguesed = getNumberWeGuessed();

    if (numberweguesed == 8) {
        alert('great work!');
    } else {
        alert('great try')
    }

}

function getNumberWeGuessed() {
    return parseInt(document.getElementById("numberWeGuessed").value)
}