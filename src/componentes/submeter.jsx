import React from "react";
import {Link} from 'react-router-dom';
import '../componentes/submeter.css'
function Submeter() {
  
    return (
    <>
      <div id="form">
        <h1 className="form_h1">Formulário de itens perdidos/achados</h1>
        <form>
          <input
          className="input_Type_Text _in_Put"
            type="text"
            name="NomeObj"
            id="objName"
            maxLength={30}
            placeholder="Nome do objecto que perdeu"
          />
          <input
          className="input_Type_Text _in_Put"
            type="text"
            name=""
            id="userPhone"
            placeholder="+244 936 721 457"
          />
          <input
          className="input_Type_Text _in_Put"
            type="text"
            name="DataObj"
            id="objDate"
            placeholder="01/04/2023"
          />
          <input
          className="input_Type_Text _in_Put"
            type="text"
            name="Localizacao"
            id="objLocation"
            placeholder="Digite os possiveis locais onde perdeu/achou"
          />

          <div id="desc">
            <label htmlFor="descricao">Descrição</label>
            <input
            className="input_Type_Text _in_Put"
              type="text"
              name=""
              id="descCont"
              placeholder="Pode dar descrições mais precisas do objecto que perdeu..."
            />
          </div>

          <div id="file">
            <label htmlFor="">Anexe uma fotografia</label>
            <input className="_in_Put" type="file" name="" id="anexArchive" accept="image/png,image/jpeg"/>
          </div>

          <div id="grid-container">
            {" "}
            <label htmlFor="estado">Estado</label>
            <div id="radio">
              <input className="_in_Put" type="radio" name="ee" id="estado" value={"Perdido"}/> <label htmlFor="radio">Perdi</label>
              <input className="_in_Put" type="radio" name="ee" id="estado" value={"Achado"} /> <label htmlFor="radio">Achei</label>
            </div>
          </div>
          
          <Link to={'/pos_submeter'}><input className="inputTypeSubmit _in_Put" type="submit" value="Submeter"/> </Link>
        </form>
      </div>
    </>
    );
}

export default Submeter;