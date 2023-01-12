const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer')
const storage = multer.diskStorage({
destination: function(req,file,cb){cb(null,'./uploads/')} ,
filename: function(req,file,cb){
  nome = file.originalname

  cb(null,nome)}
});

const upload= multer({storage : storage})
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
app.use('/uploads',express.static('uploads'));
 /* app.use(bodyParser.urlencoded({extended:true})) */
/* app.use(express.json()) */
app.post("/api/submeter",upload.single('filePath'),(req,res,next)=>{
const nomeObjecto = req.body.nomeObjecto
const numeroTelefone= req.body.numeroTelefone
const dataPerdido= req.body.dataPerdido
const localizacao= req.body.localizacao
const descricaoProduto= req.body.descricaoProduto
const imagePath= req.file.path
const estado= req.body.estado 
 const sqlinsert ='INSERT INTO `item` (`nomeObjecto`, `numeroTelefone`,`dataPerdido`, `localizacao`, `descricaoProduto`, `imagePath`,`estado`) VALUES ("?","?", "?", "?","?", "?", "?");';  

db.query(sqlinsert,[nomeObjecto,numeroTelefone,dataPerdido,localizacao,descricaoProduto,imagePath,estado],(err,result)=>{
    if(err){
      console.log(err.code) 
    }
    else{
  console.log("Inserção com sucesso")
} 
}) 
} ) 

app.get('/api/receber',(req,res)=>{
const sqlSelect = "SELECT * FROM item";
db.query(sqlSelect,(err,result)=>{
if(err){
  console.log(err.code)
} else {
  console.log(result);
  res.send(result)
}
})

})


app.listen(3001, () => {
  console.log("running on port 3001");
});
