import React, { useState } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import NavbarAdm from '../../../componentes/NavigationbarAdm/NavigationbarAdm';
import './Bannerregister.css'
import { Link } from 'react-feather';
import Swal from 'sweetalert2';

const Bannerregister = () => {
  const [alt, setAlt] = useState('');
  const [link, setLink] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleAltChange = (event) => {
    setAlt(event.target.value);
  };
  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleImageDrop = (acceptedFiles) => {
    setSelectedImage(acceptedFiles[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('file', selectedImage); // Ajuste para o campo "file" do backend
      formData.append('alt', alt);
      formData.append('link', link);

      await axios.post('http://localhost:3000/banners', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('sucesso');
      Swal.fire('Sucesso', 'Banner cadastrado com sucesso', 'success');
    } catch (error) {
      // Seu código aqui para lidar com erros de envio.
      Swal.fire('Ops...', 'Erro ao tentar cadastrar banner...', 'error');
      console.error('Erro ao enviar o banner:', error);
    }
  };

  return (
      <>
        <NavbarAdm />
        <form onSubmit={handleSubmit}>
          <h1 className="h1-banner">Cadastro Banner</h1>
          <div className="link-banner">
            <label htmlFor="link">Link do Banner:</label>
            <input type="text" className="input-link" id="link" value={link}onChange={handleLinkChange} />
          </div>
          <div className="alt-banner">
            <label htmlFor="alt">Alt do Banner:</label>
            <input type="text" className="input-alt" id="alt" value={alt} onChange={handleAltChange} />
          </div>
          <div className="image-banner">
            <Dropzone onDrop={handleImageDrop}>
              {({ getRootProps, getInputProps }) => (
                  <div className="dropzone" {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p className="texto-banner">Arraste e solte uma imagem aqui, ou clique para selecionar uma imagem</p>
                    {selectedImage && (
                        <div>
                          {/* <p>Imagem selecionada: {selectedImage.name}</p> */}
                          <img src={URL.createObjectURL(selectedImage)} alt="Imagem selecionada" />
                        </div>
                    )}
                  </div>
              )}
            </Dropzone>
          </div>
          <div className="botao-alterar-banner">
            <button className="botao-banner" type="submit">Enviar</button>
          </div>
        </form>
      </>
  );
};

export default Bannerregister;
