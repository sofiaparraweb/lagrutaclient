/* aquí deberian ir las actions */

const initialstate = {
    Noticias: [],
}


function rootReducer ( state = initialstate, action) {
    switch (action.type) {
/* distintos casos */

        default:
             return state;
    }
}


 
export default rootReducer;