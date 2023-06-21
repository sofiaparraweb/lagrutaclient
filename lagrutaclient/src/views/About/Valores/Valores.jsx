import style from "./Valores.module.css"

const Valores = () =>{
    return(
        <>
            <section className={style.parallaxContent}>
                <div className={style.parallax} />
                <h1 className={style.Tittle} style={{ backgroundColor:'rgba(195,64,56,0.8)' }}> VALORES </h1>
            </section>
            <div className={style.Parrafos} style={{ backgroundColor:'rgba(195,64,56,255)' }}>
            <div className={style.Parrafos} style={{ backgroundColor: 'rgba(195,64,56,255)' }}>
            <p>Estos valores nos guían en nuestra misión de ser un lugar de encuentro, acogida y desarrollo integral para 
            la comunidad, protegiendo el crecimiento pleno de los niños y promoviendo un mundo más justo, solidario y digno.</p>
            <li>Compromiso: Estamos comprometidos con el bienestar y desarrollo integral de los niños de Barrio Ampliación los Vallistos.</li>
        <li>Solidaridad: Promovemos la colaboración y el apoyo mutuo entre las familias, voluntarios y la comunidad.</li>
        <li>Respeto: Valoramos la dignidad de cada persona y fomentamos un trato igualitario y libre de discriminación.</li>
        <li>Justicia: Trabajamos por la justicia social y la igualdad de oportunidades para todos los niños del barrio.</li>
        <li>Colaboración: Nos asociamos con organizaciones, instituciones y empresas para maximizar nuestro impacto en la comunidad.</li>
      </div>
            </div>
        </>
    )
}

export default Valores;

