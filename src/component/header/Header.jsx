import React, { useEffect, useRef, useState } from 'react';
import './header.scss';


const Header = () => {
  // gestion de l'affichage du menu
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);
  // fermer le menu lorsqu'on clic à l'extérieur
  useEffect(() => {
    // cette fonction me permet que au click d'un élément extérieur a celui du menu vient le cacher
    const extClic = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuVisible(false);
      }
    };
    document.addEventListener('mousedown', extClic);
    // nettoyage ecouteur evenement lors du démontage du composant
    return () => { document.removeEventListener('mousedown', extClic) };
  }, []);
  return (
    <header>
      <div className='dispo_bars' onClick={() => setMenuVisible(!menuVisible)}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div ref={menuRef} className={`dispo_categorie ${menuVisible ? "visible" : ""}`}>
        <ul>
          <li className='service'>Nos Service</li>
          <li className='service'>Nos Réalisation</li>
          <li className='contact'>Contact</li>
        </ul>
      </div>
    </header >
  );
};

export default Header;