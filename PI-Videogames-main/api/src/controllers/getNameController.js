const axios = require('axios');
const {gamesFromDB, gamesFromAPI} = require('../utils/funcName')

const getGameByNameController = async (name) => {
    try {
        const mensaje = `Retorno del game de nombre: ${name}`;
        let gamesByName = [];
        const arrayGamesDB = await gamesFromDB(name);
        const arrayGamesAPI = await gamesFromAPI(name);
        gamesByName = ([...arrayGamesDB, ...arrayGamesAPI]).slice(0, 15);

        if(gamesByName.length === 0) {
            throw new Error(`No se encontro ningun Game de nombre: ${name}`);
        }
        
        return(gamesByName);
    } catch (error) {
        throw new Error(`Error: ${error.message}`);
    }
};

module.exports = getGameByNameController;