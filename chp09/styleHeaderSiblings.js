function styleHeaderSiblings() {
    var headers = document.getElementsByTagName("h1");
    for (var i = 0; i < headers.length; i++) {
        var elem = getNextElement(headers[i].nextSibling);
        addClass(elem, "intro");
        /*
        elem.style.fontWeight = "bold";
        elem.style.fontSize = "1.2em";
        */
    }
} 

function getNextElement(node) { //获取下一个 元素 节点
    if (node.nodeType == 1) {
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    return null;
}
addLoadEvent(styleHeaderSiblings);

function styleElementSiblings(theTag, theClass) {
    var elems = document.getElementsByTagName(theTag);
    for (var i = 0; i < elems.length; i++) {
        var elem = getNextElement(elems[i].nextSibling);
        addClass(elem, theClass);
    }
}
addLoadEvent(function() {
    styleElementSiblings("h1", "intro");
});