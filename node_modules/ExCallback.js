var fs = require("fs");
 console.log("Program started");

 fs.readFile("Example1.txt", results);

 function results(err, data) {
    if (err) return console(err, data);

    console.log("Results of fileread:");
    console.log(data.toString());
 }