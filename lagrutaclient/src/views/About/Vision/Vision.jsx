import style from "./Vision.module.css"

const Vision = () =>{
    return(
        <>
            <section className={style.parallaxContent}>
                <div className={style.parallax} />
                <h1 className={style.Tittle} style={{ backgroundColor:'rgba(234,93,11,0.8)' }}> VISION </h1>
            </section>
            <div className={style.Parrafos} style={{ backgroundColor:'rgba(234,93,11,255)' }}>
                <p>ESCRIBIR LA VISION</p>
            </div>
        </>
    )
}

export default Vision;