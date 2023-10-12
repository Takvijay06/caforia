const express = require("express");
const cors = require("cors");
const port = 8080;
const UserSignUp = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post("/signup",()=>UserSignUp)

app.listen(port,()=>{
    console.log(`Application is running at ${port}`)
})

module.exports = app;


