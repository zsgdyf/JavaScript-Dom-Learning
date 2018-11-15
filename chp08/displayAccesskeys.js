function displayAccesskeys() {
    var links = document.getElementsByTagName("a");
    var aKeys = new Array();
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("accesskey")) {
            var key = links[i].getAttribute("accesskey");
            var text = links[i].lastChild.nodeValue;
            aKeys[key] = text;
        }
    }
    var list = document.createElement("ul");
    for (key in aKeys) {
        var text = aKeys[key];
        var str = key + ": " + text;
        var item = document.createElement("li");
        var itemText = document.createTextNode(str);
        item.appendChild(itemText);
        list.appendChild(item);
    }
    var header = document.createElement("h2");
    var headerText = document.createTextNode("Accesskeys");
    header.appendChild(headerText);
    document.body.appendChild(header);
    document.body.appendChild(list);
}
addLoadEvent(displayAccesskeys);