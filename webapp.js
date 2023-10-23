//Require express
const express = require("express");

//app object
const app = express();


//main page
app.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Welcome to my first Node.js web site</h1>
        <p><a href="/contact">Contact</a></p>
        <p><a href="/bio">Bio</a></p>
      </body>
    </html>
  `);
});


//the contact page
app.get("/contact", (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Contact Page</h1>
        <h4>My Contact Information</h4>
        <p>Phone Number:</p> <p>1234567890</p>
        <p>Email:</p> <p>johndoe@gmail.com</p>
        <p><a href="/">Home</a></p>
        <p><a href="/bio">Bio</a></p>
      </body>
    </html>
  `);
});


//the bio page
app.get("/bio", (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Bio Page</h1>
        <h4>A short Bio of myself</h4>
        <p>First Name:</p> <p>John</p>
        <p>PLast Name:</p> <p>Doe</p>
        <p><a href="/">Home</a></p>
        <p><a href="/contact">Contact</a></p>
      </body>
    </html>
  `);
});


//If the code runs on Heroku, assign a dynamic port number
let port = process.env.PORT;

//If it runs locally assign 8002 static port
if (port == null || port == "") {
  port == 8002;
}
app.listen(port);
