const fs = require("fs");
const express = require("express");
const app = express();
const port = 5000;

const userRoutes = require('./routes/user')
app.use('/user', userRoutes)
const todoRoutes = require('./routes/todos')
app.use('/todos', todoRoutes)

app.use(express.static('./styles'));
app.engine("perscholas", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);

    // Here, we take the content of the template file,
    // convert it to a string, and replace sections of
    // it with the values being passed to the engine.
    const rendered = content
      .toString()
      .replaceAll("#title#", `${options.title}`)
      .replace("#content#", `${options.content}`);
    return callback(null, rendered);
  });
});

app.set("views", "./views"); // specify the views directory
app.set("view engine", "perscholas"); // register the template engine

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// HOME - /  - GET

app.get("/", (req, res) => {
  const options = {
    title: "Rendering Views with Express",
    content:
      "Here, we've created a basic template engine using <code>app.engine()</code> \
    and the <code>fs</code> module, then used <code>res.render</code> to \
    render this page using custom content within the template.<br><br> \
    Generally, you won't want to create your own view engines, \
    but it important to understand how they work behind the scenes. \
    For a look at some popular view engines, check out the documentation for \
    <a href='https://pugjs.org/api/getting-started.html'>Pug</a>, \
    <a href='https://www.npmjs.com/package/mustache'>Mustache</a>, or \
    <a href='https://www.npmjs.com/package/ejs'>EJS</a>. \
    More complete front-end libraries like React, Angular, and Vue \
    also have Express integrations.",
  };

  res.render("index", options);
});


//app.METHOD(PATH, HANDLER)




app.get("/about", (req, res) => {
  res.send("Hello from the about page!");
});








/*const http = require("http");
const hostname = "127.0.0.1";
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World!\n");
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})*/
