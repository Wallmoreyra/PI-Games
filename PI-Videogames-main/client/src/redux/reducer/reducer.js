// imporetación de las action-types

import { GET_GAMES } from "../actions/action-types";

//initial state:
let initialState = {
    allGames: [], allGenres: []
}

// definir la función rootReducer:
function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_GAMES:
            return {
                ...state,
                allGames: action.payload

            }
            break;

        default: return state
            break;
    }
}

export default rootReducer;