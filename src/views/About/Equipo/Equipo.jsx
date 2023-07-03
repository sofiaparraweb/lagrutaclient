import React from 'react';
import './equipo.css';

const Equipo = () => {
  const members = [
    {
      id: 1,
      name: 'FEDE',
      position: 'BACKEND',
      description: 'MASOMENOS EL CHANGO',
      image: 'https://img.freepik.com/foto-gratis/hombre-joven-guapo-nuevo-corte-pelo-estilo_176420-19636.jpg?w=2000',
    },
    {
        id: 2,
        name: 'GIAN',
        position: 'BACKEND ',
        description: 'HOLA QUERIDO',
        image: 'https://cambiardeimagen.files.wordpress.com/2013/03/moda-masculina-lentes-cara-hombre-carametria-caramorfoligia-consultoria-de-imagen.jpg',
      },
      {
        id: 3,
        name: 'JHONYYY',
        position: 'BACK',
        description: 'NO EM ANDA USUARIOS',
        image: 'https://img.freepik.com/foto-gratis/cierrese-encima-retrato-cara-joven-hombre-barbudo_171337-2887.jpg?w=2000',
      },
      {
        id: 4,
        name: 'GONZA',
        position: 'FRONT',
        description: 'EXPERTO EN ECOMMERCE',
        image: 'https://i.pinimg.com/236x/c0/de/d9/c0ded90793b6dd263a4bb3e3450d377a.jpg',
      },
      {
        id: 5,
        name: 'PEDRO',
        position: 'FRONT',
        description: 'DONATE ALGO',
        image: 'https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/cara-hombre-sonriendo.jpg?resize=500%2C500&ssl=1',
      },
      {
          id: 6,
          name: 'MALE',
          position: 'FRONT ',
          description: 'PA CUANDO VEO EL DASHBOARD',
          image: 'https://hips.hearstapps.com/ellees.h-cdn.co/assets/15/37/original/original-por-ti-rostros-activos-personas-luchadoras-12718597-1-esl-es-rostros-activos-personas-luchadoras-jpg.jpg?resize=480:*',
        },
        {
          id: 7,
          name: 'SOFI',
          position: 'FRONT',
          description: 'ESCLAVA DE AUTH0',
          image: 'https://media.glamour.es/photos/616faf06be7fea11c55d7f55/4:3/w_1200,h_900,c_limit/569953.jpg',
        },
  ];
  

  return (
    <div className="equipo">
      <h2 className="equipo__title">Nuestro Equipo</h2>
      <div className="equipo__cards">
        {members.map((member) => (
          <div className="equipo__card" key={member.id}>
            <div className="equipo__card-front">
              <img className="equipo__card-image" src={member.image} alt={member.name} />
              <div className="equipo__card-content">
                <h3 className="equipo__card-name">{member.name}</h3>
                <p className="equipo__card-position">{member.position}</p>
              </div>
            </div>
            <div className="equipo__card-back">
              <p className="equipo__card-description">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipo;




