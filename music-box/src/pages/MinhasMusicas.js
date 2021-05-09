import React, { useEffect, useState } from 'react';
import React from 'react';
import NavBar from '../components/NavBar';
import CardMusica from '../components/CardMusica';
import Button from '../components/Button';

import api from '../api';

function MinhasMusicas() {
  return (
    <>

      <NavBar />

      <div className="container">
        <div className="filter">
          <button className="btn-green rigt">Adicionar</button>
        </div>
      </div>

      <div className="container">
        <div className="music-boxes">
          
          <CardMusica
          nome="Strognoff de tatu"
          genero="shitrap"
          ano="2020"
          />
        
        <CardMusica
          nome="Melancholy Hill"
          genero="Indie"
          ano="2010"
          />

          <CardMusica
          nome="Aries"
          genero="Indie"
          ano="2020"
          />

          <CardMusica
          nome="Drift"
          genero="Trap"
          ano="2020"
          />

        </div>
      </div>




    </>
  );
}

export default MinhasMusicas;