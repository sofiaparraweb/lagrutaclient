import style from "./Mision.module.css"

const Mision = () =>{
    return(
        <>
            <section className={style.parallaxContent}>
                <div className={style.parallax} />
                <h1 className={style.TittleMision}> MISIÓN </h1>
            </section>
            <div className={style.Parrafos} style={{ backgroundColor:'rgb(215,182,62)' }}>
                <p>Queremos ser un lugar de encuentro, acogida y desarrollo integral de las personas y la comunidad de Barrio Ampliacion los Vallistos.</p>
                {/* <p>Buscamos favorecer a la comunidad del barrio, protegiendo el pleno crecimiento de sus niños, a partir de la originalidad de quienes eligen ser parte</p> */}
            </div>
        </>
    )
}

export default Mision;