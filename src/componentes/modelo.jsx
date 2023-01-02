import React,{useState} from "react";
import './modelo.css'


function Modelo({foto,title,descricao,estado}) {
    function color(estado) {
        if (estado === 'Perdido') {
            return 'red';
        }else{
            return 'green';
        }
    }
    return (
        <>
         
        <div id={"divM"}>
         <article> 
            <h4 id="titulo_model">{title}</h4> 
            <br></br>
             <img id={'fotoperdida'}src = {foto} alt="" />
             
            <p id= {"descricao"}>Descrição:{descricao}</p>

            <p id={'status'}>Estado:<span id={color(estado)}>{estado}</span></p>
           <br></br>
           <br></br>
        </article>
        </div>

        <br />
        <br />
        <br /> 
         
        </>
   

    );
}

export default Modelo;