import React from "react";
import './pos_submeter.css';
//import {Link} from 'react-router-dom';

function Pos_submeter({mensagem,footer}) {
  
    return (
        <>  
        <div id={'pos_sub'}>
            <p id={"mensagem"}>{mensagem}</p>
        </div> 
        <footer>
            <img id={'footer_sub'} src={footer} alt="" srcset="" />
        </footer>
        </>
    );
}

export default Pos_submeter;