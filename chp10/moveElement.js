function moveElement(elementId, finalXpos, finalYpos, interval) {
    var elem = document.getElementById(elementId);
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    if (!elem.style.left) {
        elem.style.left = "0px";
    }
    if (!elem.style.top) {
        elem.style.top = "0px";
    }
    var leftPos = parseInt(elem.style.left);
    var topPos = parseInt(elem.style.top);
    if (leftPos == finalXpos && topPos == finalYpos) {
        return true;
    }
    if (leftPos < finalXpos) {
        var dist = Math.ceil((finalXpos - leftPos) / 5); //向上取整
        leftPos += dist;
    }
    if (leftPos > finalXpos) {
        var dist = Math.ceil((leftPos - finalXpos) / 5);
        leftPos -= dist;
    }
    if (topPos < finalYpos) {
        var dist = Math.ceil((finalYpos - topPos) / 5);
        topPos += dist;
    }
    if (topPos > finalYpos) {
        var dist = Math.ceil((topPos - finalYpos) / 5);
        topPos += dist;
    }
    elem.style.left = leftPos + "px";
    elem.style.top = topPos + "px";
    moveIt = "moveElement('"+elementId+"', "+finalXpos+", "+finalYpos+", "+interval+")";
    elem.movement = setTimeout(moveIt, interval);
}
addLoadEvent(moveElement);