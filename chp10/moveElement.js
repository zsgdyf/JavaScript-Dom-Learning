function moveElement(elementId, finalXpos, finalYpos, interval) {
    var elem = document.getElementById(elementId);
    var leftPos = parseInt(elem.style.left);
    var topPos = parseInt(elem.style.top);
    if (leftPos == finalXpos && topPos == finalYpos) {
        return true;
    }
    if (leftPos < finalXpos) {
        leftPos++;
    }
    if (leftPos > finalXpos) {
        leftPos--;
    }
    if (topPos < finalYpos) {
        topPos++;
    }
    if (topPos > finalYpos) {
        topPos--;
    }
    elem.style.left = leftPos + "px";
    elem.style.top = topPos + "px";
    moveIt = "moveElement('"+elementId+"', "+finalXpos+", "+finalYpos+", "+interval+")";
    movement = setTimeout(moveIt, interval);
}
addLoadEvent(moveElement);