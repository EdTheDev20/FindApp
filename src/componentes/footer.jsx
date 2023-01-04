import React from "react";
import './footer.css';
//import {Link} from 'react-router-dom';

function Footer({area,title3,title4,foto,foto1,foto2}) {
  
    return (
        <>  
        <div className="Footer" >
        <img id={"area1"} src={area} alt="" srcset="" />
        <h2 id={'logo1'}>FIND</h2>
            <p id={'title3'}>{title3}</p>
            <p id={'title4'}>{title4}</p>
                <img id={'foto'} src={foto}></img>
                <img id={'foto1'} src={foto1}></img>
                <img id={'foto2'} src={foto2}></img> 
        </div> 
        </>
    );
}

export default Footer;