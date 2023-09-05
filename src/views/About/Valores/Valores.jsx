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
            <p className={style.ValueItem}>- Alegría en el trabajo</p>
            <p className={style.ValueItem}>- Resguardo absoluto de la dignidad de la persona</p>
            <p className={style.ValueItem}>- Respeto a la identidad cultural y social de individuos y comunidades</p>
          </div>
          <div className={style.ValuesColumn}>
            <h2 className={style.ValuesTitle}>ORGANIZACIONALES</h2>
            <p className={style.ValueItem}>- Responsabilidad y trabajo comprometido</p>
            <p className={style.ValueItem}>- Trabajo en red y colaborativo</p>
            <p className={style.ValueItem}>- Transparencia fiscal</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Valores;
