function getNewContent() {
    var request = new XMLHttpRequest();
    if (request) {
        request.open("GET", "example.txt", true);
        request.onreadystatechange = function() { //处理事件响应
            if (request.readyState == 4) {
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    } else {
        console.log("Sorry, your browser doesn't support XMLHttpRequest");
    }
}
window.onload = getNewContent();