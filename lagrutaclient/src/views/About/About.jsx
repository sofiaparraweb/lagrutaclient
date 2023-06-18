import style from "./About.module.css"
import Mision from "./Mision/Mision"
import Vision from "./Vision/Vision"
import Valores from "./Valores/Valores"

const About = () =>{
    return(
        <div className={style.AboutContenedor}>
            <div className={style.Introduccion}>
                <p> En La Gruta trabajamos muchas personas, estudiantes, profesionales, grandes, chicos, pero lo que sin duda nos une es el Espiritu Juvenil, esas ganas de querer construir JUNTOS un lugar donde todos puedan formar parte.</p>
                <p> No damos algo a la comunidad, sino que creamos algo JUNTOS. Se tiene como premisa fundamental el resguardo absoluto en la dignidad de la persona.</p>
                <p> Hoy, después de tantos años, podemos seguir disfrutando de este lugar que tanto nos enseña, y con orgullo podemos contar que contamos con diferentes programas como ser, un comedor infantil, talleres de niños, jóvenes y mujeres. Trabajamos con la comunidad y con su salud.</p>
            </div>
            <Mision />
            <Vision />
            <Valores />
            <h1>Que hacemos</h1>
            <h1>Historia
                <p>A mediados de la década del ´50 comienza la labor de Cáritas en Argentina. El objetivo principal de Cáritas, según sus estatutos es “animar y coordinar la obra social y caritativa de la Iglesia, insertada en la pastoral orgánica a través de formas adaptadas al tiempo y las circunstancias, para lograr el desarrollo integral de todo el hombre y de todos los hombres, con especial preferencia por las personas y comunidades más marginadas”.

Desde su nacimiento, Cáritas Argentina muestra características distintivas que le dieron identidad especial: su base parroquial, su amplio voluntariado y sus esfuerzos por desarrollar procesos sustentables con el aporte de las comunidades.

Con el correr del tiempo fue creciendo en estructura y organización. Las diócesis se van sumando a la iniciativa, constituyendo sus sedes, congregando voluntarios y procurando fondos para la tarea.

En 1962 comienzan a reunirse los secretariados diocesanos que se constituían y en 1969 se realiza el Primer Encuentro Nacional de Cáritas, en Villa Carlos Paz (Córdoba). El principal objetivo del mismo fue responder “Qué es Cáritas en la Argentina, Qué debe ser Cáritas en la Argentina y Cómo hacerlo”.

Promediando los años setenta, gran parte de las energías de Cáritas se destinaban a la ayuda inmediata, especialmente a través de la donación de alimentos, medicamentos y ropa, como sucedía en la mayoría de las Cáritas de América Latina.

Esa actividad se fue transformando en los años 80, cuando se descubre la necesidad de animar procesos de promoción humana y un mayor protagonismo de quienes participan de los distintos proyectos, procurando el propio desarrollo y el de sus comunidades.

Teniendo ese contexto, en 1986 la Conferencia Episcopal aprueba los actuales Estatutos de Cáritas Argentina como organismo de la Iglesia que coordinará la obra caritativa oficial de la misma.

En la actualidad, Cáritas Argentina se encuentra trabajando activamente en las 66 Diócesis de la Iglesia Argentina. Gracias al compromiso solidario de toda la sociedad y al esfuerzo cotidiano de más de 32.000 voluntarios, Cáritas canaliza su acción a través de más de 3.500 parroquias, capillas y centros misionales.</p>
            </h1>
            <h1>boton donacion</h1>
            <h1>Quienes somos. Equipo</h1>
        </div>
    )
}

export default About;