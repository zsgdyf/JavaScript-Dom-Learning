function positionMessage() {
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
    //movement = setTimeout("moveMessage()", 3000);
    moveElement("message", 125, 25, 20);

    var elem = document.getElementById("message1");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "50px";
    moveElement("message1", 125, 125, 20);
}
addLoadEvent(positionMessage);

function moveMessage() {
    var elem = document.getElementById("message");
    //elem.style.left = "300px";
    var leftPos = parseInt(elem.style.left);
    var topPos = parseInt(elem.style.top);
    if (leftPos == 300 && topPos == 100) {
        return true;
    }
    if (leftPos < 300) {
        leftPos++;
    }
    if (leftPos > 300) {
        leftPos--;
    }
    if (topPos < 100) {
        topPos++;
    }
    if (topPos > 100) {
        topPos--;
    }
    elem.style.left = leftPos + "px";
    elem.style.top = topPos + "px";
    movement = setTimeout("moveMessage()", 5)
}
//addLoadEvent(moveMessage);