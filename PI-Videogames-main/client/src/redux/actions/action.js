// importar las action types
import axios from "axios"
import { GET_GAMES } from "./action-types"


//action creators

export function postGames(state){
    return async function(dispatch){
        try {
            await axios.post("http://192.168.0.101:5173/videogames", state)

        } catch (error) {
            console.log(error)
        }
    }

}

export function getGames(){
    return async function(dispatch){
        try {
            const response = await axios.get("http://192.168.0.101:5173/videogames")
            return dispatch({
                type:GET_GAMES,
                payload: response.data
            })

        } catch (error) {
            console.log(error)
        }
    }

}