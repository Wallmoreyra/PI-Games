const {getAllGamesDB, getAllGamesAPI} = require('../utils/funcAllGames')

const getAllController = async () => {
    try {

        let allGames = [];

        const arrayGamesDB = await getAllGamesDB();
        const arrayGamesAPI = await getAllGamesAPI();

        allGames = ([...arrayGamesDB, ...arrayGamesAPI]).slice(0, 15);

        if(allGames.length === 0){
            throw new Error("No se pudieron traer los Games!!");
        }

        return(allGames);

    } catch (error) {
        throw new Error(`Error al tratar de buscar todos los Games: ${error.message}`);
    }
    //return("Van todos los games!!!!! BABY!!!! X_X")
};


module.exports = getAllController;