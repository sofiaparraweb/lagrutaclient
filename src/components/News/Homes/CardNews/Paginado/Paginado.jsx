import React from "react";


const Paginado = () => {


    return (
        <nav>
            <ul class="paginado">
                <button class="prev">Prev.</button>
                {/*en este lugar viene la logica del map que renderiza las noticias*/}
                <button class="next">Next.</button>
            </ul>
        </nav>

    );
}

export default Paginado;