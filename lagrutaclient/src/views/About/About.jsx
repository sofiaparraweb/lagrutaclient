import style from "./About.module.css"
import Mision from "./Mision/Mision"
import Vision from "./Vision/Vision"
import Valores from "./Valores/Valores"

const About = () =>{
    return(
        <div className={style.AboutContenedor}>
            <p color="black"> En La Gruta trabajamos muchas personas, estudiantes, profesionales, grandes, chicos, pero lo que sin duda nos une es el Espiritu Juvenil, esas ganas de querer construir JUNTOS un lugar donde todos puedan formar parte.</p>
            <p> No damos algo a la comunidad, sino que creamos algo JUNTOS. Se tiene como premisa fundamental el resguardo absoluto en la dignidad de la persona.</p>
            <p> Hoy, después de tantos años, podemos seguir disfrutando de este lugar que tanto nos enseña, y con orgullo podemos contar que contamos con diferentes programas como ser, un comedor infantil, talleres de niños, jóvenes y mujeres. Trabajamos con la comunidad y con su salud.</p>
            <p color="black"> En La Gruta trabajamos muchas personas, estudiantes, profesionales, grandes, chicos, pero lo que sin duda nos une es el Espiritu Juvenil, esas ganas de querer construir JUNTOS un lugar donde todos puedan formar parte.</p>
            <p> No damos algo a la comunidad, sino que creamos algo JUNTOS. Se tiene como premisa fundamental el resguardo absoluto en la dignidad de la persona.</p>
            <p> Hoy, después de tantos años, podemos seguir disfrutando de este lugar que tanto nos enseña, y con orgullo podemos contar que contamos con diferentes programas como ser, un comedor infantil, talleres de niños, jóvenes y mujeres. Trabajamos con la comunidad y con su salud.</p>
            <Mision />
            <Vision />
            <Valores />
            <h1>Que hacemos</h1>
            <h1>historia</h1>
            <h1>boton donacion</h1>
            <h1>Quienes somos. Equipo</h1>
        </div>
    )
}

export default About;