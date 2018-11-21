var http = require("http");
var fs = require("fs");
var path = require("path");

var fileDir = "D:/JavaScript-Dom-Learning/WebServer";

http.createServer(function(req, res) {
    var url = req.url; //输入的 html 文件路径
    var file = path.join(fileDir, url);
    console.log(file);

    fs.readFile(file,function(err, data) {
        if (err) {
            console.error();
            res.end();
        } else {
            res.writeHeader(200, {
                "content-type": "text/html", 
                "charset": "utf-8"
            });
            res.write("HelloWorld!")
            res.write(data);
            res.end();
        }
    });
}).listen(8888);
console.log("Success!");