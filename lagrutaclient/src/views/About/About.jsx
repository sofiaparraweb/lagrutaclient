import style from "./About.module.css"

const About = () =>{
    return(
        <div className={style.AboutContenedor}>
            <p color="black"> En La Gruta trabajamos muchas personas, estudiantes, profesionales, grandes, chicos, pero lo que sin duda nos une es el Espiritu Juvenil, esas ganas de querer construir JUNTOS un lugar donde todos puedan formar parte.</p>
            <p> No damos algo a la comunidad, sino que creamos algo JUNTOS. Se tiene como premisa fundamental el resguardo absoluto en la dignidad de la persona.</p>
            <p> Hoy, después de tantos años, podemos seguir disfrutando de este lugar que tanto nos enseña, y con orgullo podemos contar que contamos con diferentes programas como ser, un comedor infantil, talleres de niños, jóvenes y mujeres. Trabajamos con la comunidad y con su salud.</p>
            <p color="black"> En La Gruta trabajamos muchas personas, estudiantes, profesionales, grandes, chicos, pero lo que sin duda nos une es el Espiritu Juvenil, esas ganas de querer construir JUNTOS un lugar donde todos puedan formar parte.</p>
            <p> No damos algo a la comunidad, sino que creamos algo JUNTOS. Se tiene como premisa fundamental el resguardo absoluto en la dignidad de la persona.</p>
            <p> Hoy, después de tantos años, podemos seguir disfrutando de este lugar que tanto nos enseña, y con orgullo podemos contar que contamos con diferentes programas como ser, un comedor infantil, talleres de niños, jóvenes y mujeres. Trabajamos con la comunidad y con su salud.</p>
            <section className={style.parallaxContent}>
                <div className={style.parallax} />
                <h1 className={style.Tittle} style={{ backgroundColor:'rgba(223,184,55,0.8)' }}> MISION </h1>
            </section>
            <div className={style.Parrafos} style={{ backgroundColor:'rgba(223,184,55,255)' }}>
                <p>Queremos ser un lugar de encuentro, acogida y desarrollo integral de las personas y la comunidad de Barrio Ampliacion los Vallistos.</p>
                <p>Buscamos favorecer a la comunidad del barrio, protegiendo el pleno crecimiento de sus niños, a partir de la originalidad de quienes eligen ser parte</p>
            </div>
        </div>
    )
}

export default About;