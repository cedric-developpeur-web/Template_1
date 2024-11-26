import React, { useState } from 'react';
import './header.scss';


const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header>
      <div className='dispo_bars' onClick={() => setMenuVisible(!menuVisible)}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className={`dispo_categorie ${menuVisible ? "visible" : ""}`}>
        <ul>
          <li className='entreprise'>Entreprise</li>
          <li className='service'>Nos Service</li>
          <li className='contact'>Contact</li>
        </ul>
      </div>
    </header >
  );
};

export default Header;