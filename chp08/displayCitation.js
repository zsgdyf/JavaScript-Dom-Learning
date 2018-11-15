function displayCitation() {
    var quotes = document.getElementsByTagName("blockquote");
    for (var i = 0; i< quotes.length; i++) {
        if (quotes[i].getAttribute("cite")) { //如果有 cite 属性
            var url = quotes[i].getAttribute("cite");
            var quoteChildren = quotes[i].getElementsByTagName("*");
            if (quoteChildren.length > 0) {
                var elem = quoteChildren[quoteChildren.length - 1]; //取最后一个 元素 节点
            }
            
            var link = document.createElement("a");
            var linkText = document.createTextNode("source");
            link.appendChild(linkText);
            link.setAttribute("href", url);
            var superScript = document.createElement("sup");
            superScript.appendChild(link);
            elem.appendChild(superScript);
        }
    }
}
addLoadEvent(displayCitation);