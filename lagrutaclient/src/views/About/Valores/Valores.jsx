import style from "./Valores.module.css"

const Valores = () =>{
    return(
        <>
            <section className={style.parallaxContent}>
                <div className={style.parallax} />
                <h1 className={style.Tittle} style={{ backgroundColor:'rgba(195,64,56,0.8)' }}> VALORES </h1>
            </section>
            <div className={style.Parrafos} style={{ backgroundColor:'rgba(195,64,56,255)' }}>
                <p>ESCRIBIR LOS VALORES</p>
            </div>
        </>
    )
}

export default Valores;