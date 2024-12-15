import React from 'react';
import './profil.scss';
import datas from '../../Json/datas.json';

const Profil = () => {
  return (
    <>
      <section className='main_container'>
        <div className='title'>
          <h2>Qui Nous Somme ?</h2>
          <p className='text'>Nous sommes une entreprise à la pointe de la technologie dans le domaine du développement web, nous perfectionnons des sites vitrines ou e-commerce pour nos clients qui se trouvent aux quatre coins du globe. Notre expertise entend que, professionnelle du web, notre travail est un gage de qualité dans cet univers du développement.</p>
        </div>
      </section>
      {datas.presentation.map((e) => (
        <section>
          <div className='x'>
            <img src={e.picture[0].src} alt={e.picture[0].alt} />
            <p>{e.description}</p>
          </div>
        </section>
      ))}
    </>
  );
};

export default Profil;