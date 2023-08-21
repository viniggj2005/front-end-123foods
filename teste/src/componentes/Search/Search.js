import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import './Search.css';
import {BiMenu} from 'react-icons/bi';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    if (value.trim().length >= 3) {
      performSearch(value);
    }
  };

  const performSearch = (value) => {
    const apiUrl = `http://localhost:3000/foods/search?filterValue=${encodeURIComponent(value)}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar alimentos:', error);
      });
  };

  return (
    <div className="search">
      <div className="categorias">
      <BiMenu className="categoria-icon"/>
      </div>
      <input 
        type="text"
        placeholder="  Pesquisar:"
        className="search-input"
        value={searchValue}
        onChange={handleInputChange}
      />
    <a className="lupa-a">
      <BiSearchAlt className="lupa" onClick={() => performSearch(searchValue)} />
    </a>
        
    </div>
  );
};

export default Search;