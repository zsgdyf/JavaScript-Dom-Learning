function stripeTables() {
    var tables = document.getElementsByTagName("table");
    for (var i = 0; i < tables.length; i++) {
        var rows = document.getElementsByTagName("tr");
        for (var j = 1; j < rows.length; j += 2) {
            addClass(rows[j], "odd");
            //rows[j].style.backgroundColor = "#66ccff";
        }
    }
}
addLoadEvent(stripeTables);