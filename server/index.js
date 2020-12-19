/*
Consists of the Nodebackend using express and mysql as database
*/
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "login_module",
});


app.post("/createguest", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const gender = req.body.gender;
  const phone = req.body.phone;
  const email = req.body.email;
  const password = req.body.password;


  db.query(
    "INSERT INTO guest (name, age, gender, phone, email, password) VALUES (?,?,?,?,?,?)",
    [name, age, gender, phone, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});


app.post("/createadmin", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const gender = req.body.gender;
  const phone = req.body.phone;
  const email = req.body.email;
  const password = req.body.password;


  db.query(
    "INSERT INTO admin (name, age, gender, phone, email, password) VALUES (?,?,?,?,?,?)",
    [name, age, gender, phone, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});



app.post('/login',(req,res)=>{
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  db.query(
    "SELECT * FROM guest WHERE email=? AND password=?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({err:err})
      } 
      if(result.length>0){
        res.send(result);
      }else{
        res.send({message:"Wrong email/password!"});
      }
    }
  );
});



app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
  });