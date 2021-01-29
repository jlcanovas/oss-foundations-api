const express = require("express");

var cors = require('cors');

const app = express();

const data = require('./json/data.json');

const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', function (req, res, next) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('<h1>Hello World</h1>');
});

app.get('/foundations', function (req, res, next) {
    res.statusCode = 200;
    res.json(data);
});

app.listen(port, () => {
    console.log("Server is running on port: " + port);
});



// const http = require('http');
// const port = process.env.PORT || 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port,() => {
//   console.log(`Server running at port `+port);
// });



// // create an express app
// const express = require("express")
// const app = express()

// // use the express-static middleware
// app.use(express.static("public"))

// // define the first route
// app.get("/", function (req, res) {
//   res.send("<h1>Hello World!</h1>")
// })

// // start the server listening for requests
// app.listen(process.env.PORT || 3000, 
// 	() => console.log("Server is running..."));