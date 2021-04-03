import React from 'react';
import logo from '../assets/2021-1_assets_bootcamp-react_music-box/images/logo.png';
import avatar from '../assets/2021-1_assets_bootcamp-react_music-box/images/avatar.png'; 

function NavBar() {
    return (

        <nav>
            <div className="container">
                <img className="logo" src={logo} alt="Logo" />
                <img src={avatar} alt="Avatar" className="avatar" />
            </div>
        </nav>
    );
}

export default NavBar;