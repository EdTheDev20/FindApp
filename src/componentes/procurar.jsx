import React,{useState} from "react";
import './procurar.css';
import Modelo from "./modelo";
import Footer from "./footer";
import { Link } from "react-router-dom";

function Procurar({search,foto,foto2,foto3,title,title2,title3,descricao,descricao2,descricao3,estado,estado2,estado3,footer}) {
   
    return (
        <>
         
        <div id={"div1"}>
         <article> 
            <img id={"search"}src={search} alt="" srcset="" />
           <input id="placeholder-text"type="text" name="nome" className="_inputProcurar" placeholder="Digite o que procura ...."/>
           
        </article>
        </div>
        <Link to='/src/componentes/produto'>  <Modelo foto={foto} title={title} descricao={descricao} estado={estado}>
        </Modelo></Link>
      
        <Modelo foto={foto2} title={title2} descricao={descricao2} estado={estado2}></Modelo>
        <Modelo foto={foto3} title={title3} descricao={descricao3} estado={estado3}></Modelo>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <footer>
            <img id={'footer_proc'} src={footer} alt="" srcset="" />
        </footer>
       
        </>
   

    );
}

export default Procurar;