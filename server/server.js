const express = require("express");
const app = express();
const bcrypt = require("bcrypt")

const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose= require("mongoose");

app.use(cors({origin: "http://localhost:3000", credentials: true}))
app.use(bodyparser.json());

mongoose.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Login-signup"
  });

const db= mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", ()=> console.log("connected to mongoDB"));

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String
});

const userModel = mongoose.model("user", userSchema)

app.get("/", (req, res)=>{
    res.send("server response")
})

app.post("/signup", async (req, res)=> {
    const {name, password, email} = req.body;
    console.log(req.body);

    const hashedpassword = await bcrypt.hash(password, 10);

    const post_data = new userModel({
        name,
        password: hashedpassword,
        email
    });
    await post_data.save()  ;
    res.send("Data posted: "+ post_data);
});

app.post("/signin", async (req, res) =>{
    const {email, password} = req. body;
    console.log(req.body);
    const user =await userModel.findOne({email});
    if(!user){
        return res.status(401).json({ error: "invalid email"});
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if(!passwordMatch){
        return res.status(401).json({error: "invalid password"})
    }
    res.json({userData: user, message: "Authentication successful"});
});

const PORT=5000;
app.listen(PORT, ()=>{
     console.log(`server listening to the port ${PORT}`)
}) 