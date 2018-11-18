function prepareSlideshow() {
    if (!document.getElementById("linklist")) {
        return false;
    }
    /* if (!document.getElementById("preview")) {
        return false;
    } */
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id", "slideshow");
    var preview = document.createElement("img");
    preview.setAttribute("id", "preview");
    preview.setAttribute("src", "topic.jpg");
    preview.setAttribute("alt", "Web Design");
    slideshow.appendChild(preview);
    //var preview = document.getElementById("preview");
    //preview.style.position = "absolute";
    //preview.style.left = "0px";
    //preview.style.top = "0px";
    var list = document.getElementById("linklist");
    insertAfter(slideshow, list);

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