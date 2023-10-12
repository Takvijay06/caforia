const mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"caforia_db"
});

connection.connect((err)=>{
    if(!err){
        console.log("Connected to DB");
    }
    else{
        console.log(err);
    }
});

module.exports = connection;