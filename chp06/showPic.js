function showPic(picture) {
    if (!document.getElementById("placeHolder")) {
        return false;
    }
    var source = picture.getAttribute("href");
    var placeholder = document.getElementById("placeHolder");
    if (placeholder.nodeName != "IMG") {
        return false;
    }
    placeholder.setAttribute("src", source);
    if (document.getElementById("description")) {
        var text = picture.getAttribute("title") ? picture.getAttribute("title") : "无标题";
        var description = document.getElementById("description");
        if (description.childNodes[0].nodeType === 3) {
            description.childNodes[0].nodeValue = text;
        }
    }
}

function prepareGallery() {
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementsByTagNameNS) {
        return false;
    }
    if (!document.getElementById("imageGallery")) {
        return false;
    }
    var gallery = document.getElementById("imageGallery");
    var picList = gallery.getElementsByTagName("a");
    for (var i = 0; i < picList.length; i++) {
        picList[i].onclick = function () {
            if (showPic(this)) {
                return true;
            } else {
                return false;
            }
        }
    }
}

function addLoadEvent(func) {
    var oldOnload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldOnload();
            func();
        }
    }
}
addLoadEvent(prepareGallery);
//window.onload = prepareGallery;

/*
function countBodyChildren() {
    var bodyElement = document.getElementsByTagName("body")[0];
    console.log(bodyElement.childNodes.length);
}

window.onload = countBodyChildren;
*/