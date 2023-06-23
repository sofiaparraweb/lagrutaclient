import style from "./Valores.module.css"

const Valores = () =>{
    return(
        <>
            <section className={style.parallaxContent}>
                <div className={style.parallax} />
                <h1 className={style.Tittle} style={{ backgroundColor:'rgba(195,64,56,0.8)' }}> VALORES </h1>
            </section>
            <div className={style.Parrafos} style={{ backgroundColor:'rgba(195,64,56,255)' }}>
                <ul>EN TERRITORIO
                    <li style={{ marginTop: '10px' }}>- ALEGRÍA EN EL TRABAJO</li>
                    <li>- RESGUARDO ABSOLUTO DE LA DIGNIDAD DE LA PERSONA</li>
                    <li>- RESPETO A LA IDENTIDAD CULTURAL Y SOCIAL DE INDIVIDUOS Y COMUNIDADES</li>
                </ul>
                <ul style={{ marginTop: '30px' }}>ORGANIZACIONALES
                    <li style={{ marginTop: '10px' }}>- RESPONSABILIDAD Y TRABAJO COMPROMETIDO</li>
                    <li>- TRABAJO EN RED Y COLABORATIVO</li>
                    <li>- TRANSPARENCIA FISCAL</li>
                </ul>
            </div>
        </>
    )
}

export default Valores;

