var fs = require("fs");

console.log("program has started!");
//var data = fs.readFile('Example1.txt', function(data, err){
  //  if (err) throw err;
  // ( console.log(data.toString());
//});

// Read two files
fs.readFile("Example1.txt", function(err,data) {
  fs.readFile("Example2.txt", function(err2,data2) {

    if (err) return console.error(err);
    if (err2) return console.error((err2));
    console.log("Results of file read: ");
    console.log(data.toString());
    console.log(data2.toString());
});
});

for (var i = 0; i < 5; i++) {
    console.log("Node just keep on going while the file is been read...");
}
console.log("Program ended!");