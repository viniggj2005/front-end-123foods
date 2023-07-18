import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Banner from './componentes/Banner';
import Navbar from './componentes/Navbar/Navbar';
import Imageupload from './componentes/Formulariocadastro/imageupload';
import FormularioCadastroUser from './componentes/Formulariocadastro/formulariocadastro';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Banner/>
    
  </React.StrictMode>
);


