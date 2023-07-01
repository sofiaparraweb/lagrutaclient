import style from "./Vision.module.css"

const Vision = () =>{
    return(
        <>
            <section className={style.parallaxContent}>
                <div className={style.parallax} />
                <h1 className={style.TittleVision}> VISIóN </h1>
            </section>
            <div className={style.Parrafos} style={{ backgroundColor:'rgb(235,93,11)' }}>
                <p>Favorecer a la Comunidad de Ampliación Los Vallistos, protegiendo el pleno crecimiento de sus niños a partir de la originalidad de quienes eligen ser parte.</p>
                {/* <p>La visión de La Gruta es un mundo que es reflejo del Reino de Dios:
                    <li>Donde prevalecen la justicia, la paz, la libertad y la solidaridad</li>
                    <li>En el que la dignidad de la persona humana, hecha a imagen de Dios, es lo más importante</li>
                    <li>Donde no existe exclusión, discriminación, ni pobreza que deshumanicen</li>
                    <li>Donde los bienes de la Tierra son compartidos entre todos</li>
                    <li>Donde se respeta y cuida todo lo creado, por el bien común de las generaciones futuras</li>
                    <li>En el que todas las personas, sobre todo las más pobres, marginadas y oprimidas, como parte de la comunidad mundial, tienen esperanza y están habilitadas a llegar a la plenitud de su humanidad.</li>
                </p> */}
            </div>
        </>
    )
}

export default Vision;