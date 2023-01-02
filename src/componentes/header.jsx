
import React from "react";
import './header.css';
import {Link} from 'react-router-dom';

function Header({}) {
  
    return (
        <>   
       <div id={"navegacao"}>
          <h2 id={'logo'}>FIND</h2>
            <div id={"menu"}>
            <Link to={'/'}><a className="_SortOfLink" href="#a" id={"borda"}>Home</a></Link>
            <Link to={'/submeter'}><a className="_SortOfLink" href="#b"id={"borda"}>Submeter</a></Link>
            <Link to={'/procurar'}><a className="_SortOfLink" href="#c" id={"borda"}>Procurar</a></Link>
          {/*   <Link to={'/electronicos'}><a href="#d">Electronicos</a></Link>  */}

          {/*   <a href="./index.html" id={"borda"} >Home</a> 
            <a href="./index.html"  rel="noopener noreferrer" id={"borda"}>Submeter</a>
            <a href="./index.html"  rel="noopener noreferrer" id={"borda"}>Procurar</a> */}
            </div>
        </div>
       
        </>
    );
}

export default Header;