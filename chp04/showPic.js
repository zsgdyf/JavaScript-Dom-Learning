function showPic(picture) {
    var source = picture.getAttribute("href");
    var placeholder = document.getElementById("placeHolder");
    placeholder.setAttribute("src", source);
    var text = picture.getAttribute("title");
    var description = document.getElementById("description");
    description.childNodes[0].nodeValue = text;
}

function countBodyChildren() {
    var bodyElement = document.getElementsByTagName("body")[0];
    console.log(bodyElement.childNodes.length);
}

window.onload = countBodyChildren;