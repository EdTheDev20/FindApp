import React from "react";
import Body from "./componentes/body";
import Header from "./componentes/header";
import imagem from"../src/componentes/Capture d’écran 2022-12-27 213342.png";
import imagem2 from "../src/componentes/Capture d’écran 2022-12-27 213418.png";
import Footer from "./componentes/footer";
import imagem3 from "../src/componentes/Capture d’écran 2022-12-28 134957.png";
import face from "../src/componentes/5305154_fb_facebook_facebook logo_icon.png";
import twitter from "../src/componentes/104501_twitter_bird_icon.png";
import insta from "../src/componentes/1161953_instagram_icon.png";
import Carteira_doc from "../src/componentes/Capture d’écran 2022-12-28 160013.png";
import Procurar from "./componentes/procurar";
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Submeter from "./componentes/submeter";
import Iphone from "../src/componentes/Capture d’écran 2022-12-29 144901.png";
import Chaves_car from "../src/componentes/Capture d’écran 2022-12-29 144949.png";
import Lupa from "../src/componentes/4092559_search_magnifier_mobile ui_zoom_icon.png";
import Pos_submeter from "./componentes/pos_submeter";

function App() {
  return(
    <>
    <Router>
      {/*Aqui é onde acontece os links tendo o cabeçario como elemento comum em todos*/}
      <Header></Header>

      {/* EDGaR */ }
      <Routes>
        {/*O body é tratado como a home logo sera a primeira pagina apresentada e também aquela que quando clicado no botao home no cabeçario sera apresentada*/}
        <Route path='/' element={ <Body foto1={imagem} foto2={imagem2} title={"Junte-se a nos e encontre o que perdeu"} title2={"Disponiveis em todo pais"} title3={'Uma aplicação focada em ajudar pessoas que perderam seus pertences'} title4={"Nossas redes sociais"} conteudo2={'O que perdeu durante um passeio turistico pode ser achado.'} imagem3={imagem3} face={face} twitter={twitter} insta={insta}></Body>}/>
        <Route path='/submeter' element={<Submeter></Submeter>}></Route>
        <Route path='/procurar' element={<Procurar search={Lupa} foto={Carteira_doc} foto2={Iphone} foto3={Chaves_car} title={'Carteira de documentos'}title2={"Iphone 11"} title3={'Chaves de Carro'} descricao={' Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias n...'} descricao2={' Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias n...'} descricao3={' Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias n...'} estado={'Perdido'} estado2={"Achado"} estado3={"Achado"} footer={imagem3}></Procurar>}></Route>
        {/*A pagina pos_submeter é possui a sua rota no app mas o seu link no submeter logo ao contrario de todas as outras paginas que seus links se encontram no cabeçario */}
        <Route path='/pos_submeter' element={<Pos_submeter mensagem={"Obrigada por preencher o formulario"} footer={imagem3}></Pos_submeter>}></Route>
      </Routes>
     
    </Router>
     
   
    
  
    </>
  
  );
}

export default App;