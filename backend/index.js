const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors= require('cors');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const port = 3002;

const connection = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "orgelle_bd"
});

connection.connect((err)=>{
    if (err) {
        console.error("Connection to the database failed: ", err);
        return;
    }
    console.log("Connection to the database established.")
});

app.post("/register", (req, res) => {
    const email= req.body.email;
    const username= req.body.username;
    const password= req.body.password;
    
    connection.query("INSERT INTO users (username, email,password) VALUES(?,?,?)",[username,email,password],
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send(err.message);
            }
        }
    )
})

// Route pour la connexion d'un utilisateur
app.post('/login', (req, res) => {
    const username= req.body.username;
    const password= req.body.password;
    
    connection.query("SELECT * FROM users WHERE username=? AND password=?",[username,password],
        (err, result) => {
            if(err){
                req.setEncoding({error: err});
            }else{
                if(result.length> 0){
                    res.send(result);
                }else{
                    res.send(err.message);
                }
            }
        }
    )
});

app.listen(port, () =>{
    console.log(`Server is listening on ${port}`);
});