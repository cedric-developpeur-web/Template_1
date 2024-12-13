import React from 'react';
import './profil.scss';

const Profil = () => {
  return (
    <>
      <section>
        <div className='titre'>
          <h1>Développeur Web FrontEnd</h1>
        </div>
        <div className='x'>
          <img src="/Many.webp" alt="" />
          <p>Many est en charge du développement web de la partie frontend, qui est le visuel que l’utilisateur voit quand il arrive sur un site web. Many vient intégrer tous les éléments et s’occupe de l’ergonomie du site web pour avoir une meilleure expérience lors d’une visite sur un site web.</p>
        </div>
      </section>
      <br />
      <section>
        <div className='titre'>
          <h1>Développeur Web BackEnd</h1>
        </div>
        <div className='x'>
          <img src="/Alex.webp" alt="" />
          <p>Alex est en charge du développement web de la partie backend, qui est le cerveau que l’utilisateur ne voit pas quand il arrive sur un site web. Alex vient manipuler toutes les données qui viennent communiquer avec les serveurs pour exécuter toutes les demandes en lien avec le site web.</p>
        </div>
      </section>
      <section className='main_container'>
        <div className='title'>
          <h2>Qui Nous Somme ?</h2>
          <p className='text'>Nous sommes une entreprise à la pointe de la technologie dans le domaine du développement web, nous perfectionnons des sites vitrines ou e-commerce pour nos clients qui se trouvent aux quatre coins du globe. Notre expertise entend que, professionnelle du web, notre travail est un gage de qualité dans cet univers du développement.</p>
        </div>
      </section>
    </>
  );
};

export default Profil;