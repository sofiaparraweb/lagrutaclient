import style from "./Valores.module.css";

const Valores = () => {
  return (
    <>
      <section className={style.parallaxContent}>
        <div className={style.parallax} />
        <h1 className={style.TittleValores}> VALORES </h1>
      </section>
      <div className={style.Parrafos} style={{ backgroundColor: '#B9362C' }}>
        <div className={style.ValuesContainer}>
          <div className={style.ValuesColumn}>
            <h2 className={style.ValuesTitle}>EN TERRITORIO</h2>
            <ul className={style.ValuesList}>
              <li className={style.ValueItem}>- ALEGRÍA EN EL TRABAJO</li>
              <li className={style.ValueItem}>- RESGUARDO ABSOLUTO DE LA DIGNIDAD DE LA PERSONA</li>
              <li className={style.ValueItem}>- RESPETO A LA IDENTIDAD CULTURAL Y SOCIAL DE INDIVIDUOS Y COMUNIDADES</li>
            </ul>
          </div>
          <div className={style.ValuesColumn}>
            <h2 className={style.ValuesTitle}>ORGANIZACIONALES</h2>
            <ul className={style.ValuesList}>
              <li className={style.ValueItem}>- RESPONSABILIDAD Y TRABAJO COMPROMETIDO</li>
              <li className={style.ValueItem}>- TRABAJO EN RED Y COLABORATIVO</li>
              <li className={style.ValueItem}>- TRANSPARENCIA FISCAL</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Valores;
