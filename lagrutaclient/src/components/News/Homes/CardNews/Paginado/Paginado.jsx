import React from "react";


const Paginado = () => {


    return (
        <nav>
            <ul class="paginado">
                <button class="prev"></button>
                {/*en este lugar viene la logica del map que renderiza las noticias*/}
                <button class="next"></button>
            </ul>
        </nav>

    );
}

export default Paginado;