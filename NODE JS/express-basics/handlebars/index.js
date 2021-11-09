const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 2000;

//set up the template engine
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  const person = {
    uname: "Arjun",
    role: "Admin",
  };
  // for below render()--->2nd param is optional depending on what object need to be rendered!!!
  res.render("./home.handlebars", {
    person,
  });
});
app.get("/about", (req, res) => {
  const persons = [
    {
      uname: "Arjun",
      role: "Admin",

    },
    {
        uname:"Buvan",
        role:"User"
    },
  ];
  res.render("./about.handlebars",{
      persons
  });
});
app.get("/contact", (req, res) => {
  res.render("./contact.handlebars",{
      users :["Akshay","Bittu"],
      isAdmin:false
  });
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
