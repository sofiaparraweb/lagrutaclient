import style from "./Vision.module.css"

const Vision = () =>{
    return(
        <>
            <section className={style.parallaxContent}>
                <div className={style.parallax} />
                <h1 className={style.TittleVision}> VISIÓN </h1>
            </section>
            <div className={style.Parrafos} style={{ backgroundColor:'rgb(235,93,11)' }}>
                <p>Favorecer a la Comunidad de Ampliación Los Vallistos, protegiendo el pleno crecimiento de sus niños a partir de la originalidad de quienes eligen ser parte.</p>
            </div>
        </>
    )
}

export default Vision;