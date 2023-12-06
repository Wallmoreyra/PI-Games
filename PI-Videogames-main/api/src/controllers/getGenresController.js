const {genresFromAPI, genresEnDB} = require ('../utils/funcGenres');
//const genresEnDB = require ('../utils/funcGenres');

let generosAgregado = null;

const genresController = async () => {

    //return "peticion a generos!!!"
    try {
        if(generosAgregado === null) {
            const generos = await genresFromAPI();
            genresEnDB(generos);
            generosAgregado = generos;
            return generos;
            //return "peticion a generos!!!"
        } else{
            //console.log("ya los mando!!")
            return generosAgregado;
        }
    } catch (error) {
        throw new Error('Error al pedir los generos!!!');
    }
};

module.exports = genresController;