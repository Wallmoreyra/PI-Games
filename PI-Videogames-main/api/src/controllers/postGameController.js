const genresController = require('./getGenresController');
const {createVideogameDB, searchNameDB, searchNameAPI, searchGenresDB} = require('../utils/funcPost');



const createGameDB = async (name, descrip, platform, img, launchDate, rating, genres) => {
    try {
        await genresController();
        const genresDB = await searchGenresDB(genres);

        const gameDB = await searchNameDB(name);

        //No uso la busqueda en la api ya que por la cantidad no es recomendable
        //const gameAPI = await searchNameAPI(name);

        if (gameDB) {
            throw new Error(`Ya existe el juego ${name} en la DB`);
        };
        // if (gameAPI) {
        //     throw new Error(`Ya existe el juego ${name} en la API`);
        // };
        if (genresDB.length < 1) {
            throw new Error("Necesita tener mas de un Genero!!");
        }
        const gameCreated = await createVideogameDB(name, descrip, platform, img, launchDate, rating, genresDB);

        return gameCreated;
       
    } catch (error) {
        throw new Error(`Error: ${error.message}`);
    }
};

module.exports = createGameDB;