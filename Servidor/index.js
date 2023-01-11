const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer')
const upload= multer({dest: '/uploads/'})
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Password123",
  database: "findapp",
});
/*
app.get("/", (req, res) => {
  const sqlinsert =
    'INSERT INTO `item` (`nomeObjecto`, `numeroTelefone`,`dataPerdido`, `localizacao`, `descricaoProduto`, `imagePath`,`estado`) VALUES ("iPhone","+244936721457", "01/02/2022", "Benfica","descricaoProduto", "ALEATORIOO", "estado");';
  db.query(sqlinsert, (err, result) => {
    if(err){
      res.send(err.code)
    }
    else{  
      res.send("Funcionei"); 
    }

}) } )  */
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.post("/api/submeter",(req,res)=>{
const nomeObjecto = req.body.nomeObjecto
const numeroTelefone= req.body.numeroTelefone
const dataPerdido= req.body.dataPerdido
const localizacao= req.body.localizacao
const descricaoProduto= req.body.descricaoProduto
const imagePath= req.body.imagePath
const estado= req.body.estado 
 const sqlinsert ='INSERT INTO `item` (`nomeObjecto`, `numeroTelefone`,`dataPerdido`, `localizacao`, `descricaoProduto`, `imagePath`,`estado`) VALUES ("?","?", "?", "?","?", "?", "?");';  

db.query(sqlinsert,[nomeObjecto,numeroTelefone,dataPerdido,localizacao,descricaoProduto,imagePath,estado],(err,result)=>{
    if(err){
      console.log(err.code) 
    }
    else{
  console.log("SUCESSOOOOO")
} 
}) 
} ) 


app.listen(3001, () => {
  console.log("running on port 3001");
});
