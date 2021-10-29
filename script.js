var typeIteration = 0;
var typingSpeed = 50;
var titleText = "Testing..."

function removeElement(element) {
    element.remove;
}

function typeWriter() {
    if (typeIteration < titleText.length) {
        document.getElementById("title").innerHTML += titleText.charAt(typeIteration);
        typeIteration++;
        setTimeout(typeWriter, typingSpeed);
    }
    else {
        setTimeout(removeElement(document.getElementById("title")),3);
    }
}