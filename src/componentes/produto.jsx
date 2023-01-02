import  {React, useState } from "react";
import "./body.css";


function Produto({nomep,imagem,estado, descricao,dataperdido,localizacao,telefone,dataemquefoiachado}) {
/*
const Objecto = {
  nomeproduto:'iPhone 11',
  imagem: imagemdoObjecto,
  localizacao: 'dangereux',
  estado:'Perdido',
  descricao: 'LOREM  LOREM' ,
  dataperd:'01/01/1999',
  telefone:'+244 936721457',
  dataacha:'02/01/1999'
}

<Produto dataemquefoiachado={Objecto.dataacha} dataperdido={Objecto.dataperd} imagem={Objecto.imagem} estado={Objecto.estado} nomep={Objecto.nomeproduto} descricao={Objecto.descricao} localizacao={Objecto.localizacao}
    telefone={Objecto.telefone}></Produto>
*/

function color(estado){
if(estado==='Perdido')
return 'red';
else return 'green';

}
  
return (<>
<div className="produto gridContainer">

  <div className="imagemProduto">
    <img id="imagem" src={imagem} alt=""/>
    <div className="_textoProduto">
      <p className="Texto">{nomep}</p>
      <p className="Texto">Estado: <span id={color(estado)}>{estado}</span></p>
      </div>
    </div>


    <div className="detalhes">

   <div className="_main">
    <p className="_submain">Descrição:</p>
    <p className="_conteudo">{descricao}</p>
   </div>

   <div className="_main">
    <p className="_submain">Data em que foi perdido:</p>
    <p className="_conteudo">{dataperdido}</p>
   </div>

   <div className="_main">
    <p className="_submain">Localização:</p>
    <p className="_conteudo">{localizacao}</p>
   </div>

   <div className="_main">
    <p className="_submain">Telefone:</p>
    <p className="_conteudo">{telefone}</p>
   </div>

   <div className="_main">
    <p className="_submain">Data em que foi achado:</p>
    <p className="_conteudo">{dataemquefoiachado}</p>
   </div>
   


    </div>
  </div>




</>
)}
export default Produto;
