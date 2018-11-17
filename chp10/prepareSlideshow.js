function prepareSlideshow() {
    if (!document.getElementById("linklist")) {
        return false;
    }
    if (!document.getElementById("preview")) {
        return false;
    }
    var preview = document.getElementById("preview");
    preview.style.position = "absolute";
    preview.style.left = "0px";
    preview.style.top = "0px";
    var list = document.getElementById("linklist");
    var links = list.getElementsByTagName("a");
    links[0].onmouseover = function() {
        moveElement("preview", -384, 0, 10);
    }
    links[1].onmouseover = function() {
        moveElement("preview", -768, 0, 10); //384 * 2 = 768
    }
    links[2].onmouseover = function() {
        moveElement("preview", -1152, 0, 10); //384 * 3 = 1152
    }
}
addLoadEvent(prepareSlideshow);