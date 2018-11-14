function insertParagraph(text) {
    var str = "<p>";
    str = str + text;
    str = str + "</p>";
    document.write(str);
}

window.onload = function() {
    var para = document.createElement("p");
    var txt1 = document.createTextNode("This is ");
    para.appendChild(txt1);
    var emph = document.createElement("em");
    var txt2 = document.createTextNode("my");
    emph.appendChild(txt2);
    para.appendChild(emph);
    var txt3 = document.createTextNode(" content");
    para.appendChild(txt3);
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
}

/*
window.onload = function() {
    var para = document.createElement("p");
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
    var txt = document.createTextNode("Hello World");
    para.appendChild(txt);
}
*/
/*
window.onload = function() {
    var testdiv = document.getElementById("testdiv");
    alert(testdiv.innerHTML);
}
*/