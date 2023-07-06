import React, { useEffect, useRef } from 'react';
import './timeline.css';
import $ from 'jquery';

const Timeline = () => {
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = $(window).scrollTop();
      itemRefs.current.forEach((item, index) => {
        const topOffset = $(item).offset().top;
        const height = $(item).outerHeight();
        if (scrollTop > topOffset - height / 2 && scrollTop < topOffset + height) {
          $(item).addClass('active');
          const imgSrc = $(item).find('.timeline__img').attr('src');
          $(timelineRef.current).css('background-image', `url(${imgSrc})`);
        } else {
          $(item).removeClass('active');
        }
      });
    };

    $(window).on('scroll', handleScroll);

    return () => {
      $(window).off('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="timeline-container" id="timeline-1" ref={timelineRef}>
        <div className="timeline-header">
          <h2 className="timeline-header__title">NUESTRA HISTORIA</h2>
          <h3 className="timeline-header__subtitle">LA GRUTA</h3>
        </div>
        <div className="timeline">
          <div className="timeline-item" ref={el => itemRefs.current[0] = el}>
            <div className="timeline__content">
              <div className="timeline__img-container">
                <img className="timeline__img" src="https://losprimeros.tv/download/multimedia.normal.acb337f67917389b.6e6f726d616c2e77656270.webp" alt="La Gruta 2011" />
              </div>
              <h2 className="timeline__content-title">2011</h2>
              <p className="timeline__content-desc">Nace la gruta como un proyecto de la fundacion "JQM"</p>
            </div>
          </div>
          <div className="timeline-item" ref={el => itemRefs.current[1] = el}>
            <div className="timeline__content">
              <div className="timeline__img-container">
                <img className="timeline__img" src="https://www.diarioviraltucuman.com.ar/wp-content/uploads/2021/03/Pobreza-Argentina-tiene-una-de-las-tasas-mas-altas-de-la-region.jpg" alt="La Gruta 1905" />
              </div>
              <h2 className="timeline__content-title">2013</h2>
              <p className="timeline__content-desc">Alianza con el banco de alimentos. El proyecto toma forma y nace LA GRUTA como fundación independiente</p>
            </div>
          </div>
          <div className="timeline-item" ref={el => itemRefs.current[2] = el}>
            <div className="timeline__content">
              <div className="timeline__img-container">
                <img className="timeline__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwTGEh8DuXz8yWpwFawV8OFxzNUUhIxxiPuBfBHgPRgHq8TUHGX4bSLaapxnzBxlxlUFc&usqp=CAU" alt="La Gruta 1914" />
              </div>
              <h2 className="timeline__content-title">2014/2015</h2>
              <p className="timeline__content-desc">se completa el esquema de funcionamiento, agregando áreas y talleres</p>
            </div>
          </div>
          <div className="timeline-item" ref={el => itemRefs.current[3] = el}>
            <div className="timeline__content">
              <div className="timeline__img-container">
                <img className="timeline__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNYwlyyKv7FVF6oMIBuaSGVGEjzv-53ccA8gLkD6zeG7fR9k63-p3XLxlsVNWbG7l--0&usqp=CAU" alt="La Gruta 1920" />
              </div>
              <h2 className="timeline__content-title">2016</h2>
              <p className="timeline__content-desc">Apertura del voluntariado a todos los que quisieran ser parte</p>
            </div>
          </div>
          <div className="timeline-item" ref={el => itemRefs.current[4] = el}>
            <div className="timeline__content">
              <div className="timeline__img-container">
                <img className="timeline__img" src="https://www.tucumanalas7.com.ar/u/fotografias/m/2019/11/21/f1280x720-94216_225891_5050.jpg" alt="La Gruta 1923" />
              </div>
              <h2 className="timeline__content-title">2018</h2>
              <p className="timeline__content-desc">Separación de roles: comisión directiva y asamblea. Esta ultima viene a renovar la mirada en búsqueda de un objetivo global</p>
            </div>
          </div>
          <div className="timeline-item" ref={el => itemRefs.current[5] = el}>
            <div className="timeline__content">
              <div className="timeline__img-container">
                <img className="timeline__img" src="https://www.lanacion.com.ar/resizer/v2/mas-de-la-mitad-de-los-chicos-son-pobres-en-la-66M3T2VY3ZCWNCNR4D6EIV4SSM.jpg?auth=9bce19a88ba0ef8196ab31fc7deafc39a0af24d224031bceda5d2a2f5c1a3309&width=309&height=206&quality=80&smart=false" alt="La Gruta 1923" />
              </div>
              <h2 className="timeline__content-title">2020</h2>
              <p className="timeline__content-desc">Se busca intervenir en la comunidad, creando un área destinada a lograrlo</p>
            </div>
          </div>
          <div className="timeline-item" ref={el => itemRefs.current[6] = el}>
            <div className="timeline__content">
              <div className="timeline__img-container">
                <img className="timeline__img" src="https://www.tucumanalas7.com.ar/u/fotografias/m/2022/9/27/f1280x720-112940_244615_5050.jpg" alt="La Gruta 1923" />
              </div>
              <h2 className="timeline__content-title">2022/2023</h2>
              <p className="timeline__content-desc">camino hacia un proyecto comunitario, dejamos de ser "el comedor" para buscar herramientas profesionales que sustenten el trabajo del barrio</p>
            </div>
          </div>
          <div className="timeline-item" ref={el => itemRefs.current[7] = el}>
            <div className="timeline__content">
              <div className="timeline__img-container">
                <img className="timeline__img" src="https://www.izquierdadiario.es/IMG/arton153946.jpg?1585774497" alt="La Gruta 1923" />
              </div>
              <h2 className="timeline__content-title">ACTUALIDAD</h2>
              <p className="timeline__content-desc">LA GRUTA busca lograr un crecimeinto integral de los vecinos, no solo brindando a la comunidad, sino creando junto a ella </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
