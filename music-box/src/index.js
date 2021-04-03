import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';

import '../src/assets/2021-1_assets_bootcamp-react_music-box/css/reset.css'
import './assets/2021-1_assets_bootcamp-react_music-box/css/style.css';


ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);

