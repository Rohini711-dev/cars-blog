const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const{v4:uuidv4} = require("uuid");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.set("views",path.join(__dirname,"views"));
app.get("/",(req,res)=> {
    res.send("Server working well");
});

let posts = [
    {
       id:uuidv4(),
       username:"Alex",
       content:"BMW offers a diverse lineup of petrol hybrid and electric vehicles in India,with models ranging from the X1 and 3 Series to the X7 and XM, alongside locally produced cars at  their Chennai plant. ",
       image : "https://i.pinimg.com/236x/6f/ac/d5/6facd5f4d2183deaed6cad63882a4d88.jpg",
    
    
    },
    {
       id:uuidv4(),
       username:"James",
       content:"Lamborghini (officially Automobili Lamborghini S.p.A. and colloquially Lambo) is an Italian manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi. Automobili Lamborghini S.p.A. Ducati Motor Holding S.p.A.",
       image : "https://static.vecteezy.com/system/resources/thumbnails/053/733/179/small/every-detail-of-a-sleek-modern-car-captured-in-close-up-photo.jpg",
    
    },
    {
       id:uuidv4(),
       username:"Davis",
       content:"Volkswagen India offers a premium lineup focused on German engineering, safety, and performance, featuring top models like the 5-star GNCAP-rated Virtus sedan and Taigun SUV, alongside the Tiguan, Tayron, and Golf GTI. Key highlights include TSI petrol engines, high-strength safety cage construction, and a strong SUV/sedan portfolio. ",
       image : "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Taigun/12659/1770889095844/front-left-side-47.jpg",
    },
    {
       id:uuidv4(),
       username:"Clara",
       content:"The most expensive car in the world is the Rolls-Royce La Rose Noire Droptail. Touted as the costliest car ever made at a staggering Rs. 250 crores, the Rolls-Royce La Rose Noire Droptail serves as the British luxury car maker's tribute to automobile craftsmanship.",
       image : "https://stimg.cardekho.com/images/carexteriorimages/930x620/Rolls-Royce/Rolls-Royce-Wraith/6398/1595835409056/exterior-image-165.jpg",
    
    }
];

app.get("/posts",(req,res)=> {
    res.render("index.ejs",{posts});

});

app.get("/posts/new",(req,res)=> {
    res.render("new.ejs");
   // res.send("post request sending");
});

app.post("/posts",(req,res)=> {
    let{username,content} = req.body;
    posts.push({username,content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=> {
    let{id} = req.params;
    let post = posts.find((p)=>id === p.id);
    res.render("show.ejs",{post});
});


app.patch("/posts/:id",(req,res)=> {
    let{id} = req.params;
    let post = posts.find((p)=>id === p.id);
    let newContent = req.body.content;
    post.content=newContent;
    res.redirect("/posts");
})

app.get("/posts/:id/edit",(req,res)=> {
    let {id} = req.params;
    let post = posts.find((p)=>id === p.id);
    res.render("edit.ejs",{post});
})

app.delete("/posts/:id",(req,res)=> {
    let {id} = req.params;
    posts = posts.filter((p)=>id !== p.id);
    res.redirect("/posts");
});

app.listen(port,() => {
    console.log("Listening on port 8080");
});

