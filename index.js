import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const posts = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));



app.get("/",(req,res)=>{
    res.render("index.ejs",{posts: posts});
});

app.get("/new",(req,res)=>{
    res.render("new.ejs");
});

app.get("/about", (req,res)=>{
    res.render("about.ejs");
});

app.get("/contact", (req,res)=>{
    res.render("contact.ejs");
});

app.post("/new",(req,res)=>{
    const title =  req.body.title;
    const content = req.body.content;
    
    posts.push({title,content});
    res.redirect("/");

});

app.get("/edit",(req,res)=>{
    const postId = req.query.postId; // Get the post ID from query parameters
    const post = posts[postId]; // Get the specific post
    res.render("edit.ejs",{post: post, postId: postId});
});

app.post("/edit", (req, res) => {
    const postId = req.body.postId; // Get the post ID from the form
    const title = req.body.title;
    const content = req.body.content;
    
    // Update the existing post instead of adding a new one
    posts[postId] = { title, content };
    res.redirect("/");
  });   

  app.post("/delete", (req, res) => {
    const postId = req.body.postId; // Get the post ID from the form
    posts.splice(postId,1);
    res.redirect("/");
  });   



app.listen(port,()=>{
    console.log(`listening at port ${port}`);
});