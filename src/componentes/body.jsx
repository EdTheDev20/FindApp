import React,{useState} from "react";
import './body.css';
import Footer from "./footer";



function Body({foto1,foto2,title,title2,title3,title4,conteudo2,imagem3,face,twitter,insta}) {
   
    return (
        <>
         
        <div id={"div1"}>
         <article> 
            <h3>{title}</h3> 
            <br></br>
             <img id={'imagem1'}src = {foto1} alt="" />
            <p id= {"conteudo"}></p> 
           <br></br>
           <br></br>
        </article>
        </div>

        <div id={"div2"}>
        <article> 
            <h4 id={'cont'}>{title2}</h4>
             <p id={'conteudo2'}>{conteudo2}</p>
            
             <img id={"imagem2"} src = {foto2} alt="" />

        </article>
        </div> 
        <br />
        <br />
        <br /> 
        <Footer area={imagem3} title3={title3} title4={title4} foto={face} foto1={twitter} foto2={insta} ></Footer>
        </>
   

    );
}

export default Body;