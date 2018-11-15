function displayAbbreviations() {
    if (!document.getElementsByTagName || !document.createElement
        || !document.createTextNode) {
            return false;
        }

    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) {
        return false;
    }

    var defs = new Array();
    for (var i = 0; i < abbreviations.length; i++) {
        if (abbreviations[i].childNodes.length < 1) {
            continue;
        }
        var defination = abbreviations[i].getAttribute("title");
        var key = abbreviations[i].lastChild.nodeValue;
        defs[key] = defination;
    }

    var defList = document.createElement("dl");
    for (key in defs) {
        var defination = defs[key];
        var defTitle = document.createElement("dt");
        var defText = document.createTextNode(key);
        defTitle.appendChild(defText);
        var defDescription = document.createElement("dd");
        var defDescriptionText = document.createTextNode(defination);
        defDescription.appendChild(defDescriptionText);
        defList.appendChild(defTitle);
        defList.appendChild(defDescription);
    }
    if (defList.childNodes,length < 1) {
        return false;
    }

    var header = document.createElement("h2");
    var headText = document.createTextNode("Abbreviations");
    header.appendChild(headText);

    document.body.appendChild(header);
    document.body.appendChild(defList);
}
addLoadEvent(displayAbbreviations);