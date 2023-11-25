const axios = require('axios');
const {getGameByID,getGameByIDAPI} = require('../utils/funcGamesID');


const getGameByIDController = async (id, source) => {
    try {
        const detail = "si";
        const game = source === 'bdd'
            ?await getGameByID(id,detail)
            :await getGameByIDAPI(id);

            if(source === 'api' && game === "" || game === undefined){
                throw new Error("mo hay ningun game con la id en la API");
            };
            if(source === 'bdd' && game === "" || game === undefined){
                throw new Error("mo hay ningun game con la id en la DB");
            };
        return game;
    } catch (error) {
        throw new Error(`Error: no se encontro ${error.message}`);
    }
};

module.exports = getGameByIDController;