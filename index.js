var http = require("http");
var server = http.createServer(function (request, response) {

    if (request.url === "/") {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.end('Hello from the Homepage');
    }

    if (request.url === "/myBlog") {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.end('<h1>Hello from the server</h1>');
        response.end('<h2>Hello my own page<h2>')
    }
    if (request.url === "/myTable") {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write('<h2>HTML Table</h2>');
        response.write(`<style>
        table, th, td {
          border: 1px solid;
          color:red;
        }
        </style>`);
        response.end(`<table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td><a href="https://en.wikipedia.org/wiki/Germany">Germany</a></td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </table>
      `);
    }

})

var port = process.env.PORT || 3000;
server.listen(port);
console.log("Server is running at http://localhost:%d", port);