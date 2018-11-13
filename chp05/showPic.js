function showPic(picture) {
    var source = picture.getAttribute("href");
    var placeholder = document.getElementById("placeHolder");
    placeholder.setAttribute("src", source);
    var text = picture.getAttribute("title");
    var description = document.getElementById("description");
    description.childNodes[0].nodeValue = text;
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
            showPic(this);
            return false;
        }
    }
}

function addLoadEvent(func) {
    var oldOnload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
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