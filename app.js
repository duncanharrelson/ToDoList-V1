const express = require("express");
const bodyParser = require("body-parser");
const date = require(`${__dirname}/date.js`);

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {

    let day = date.getDate()
    res.render("list", {listTitle: day, newListItems: items, route: "/"});

});

app.post("/", (req, res) =>{
    let item = req.body.newItem;

    items.push(item);
    res.redirect("/");
})

app.get("/work", (req, res) => {
    res.render("list", {listTitle: "Work List", newListItems: workItems, route: "/work"});    
})

app.post("/work", (req, res) => {
    let item = req.body.newItem;

    workItems.push(item);
    res.redirect("/work");      
})

app.get("/about", (req, res) => {
    res.render("about");
})


app.listen(3000, () =>{
    console.log("Server started on port 3000")
});