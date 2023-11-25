require('dotenv').config();
const {API_KEY, API_GENRES}  = process.env;
const { Genres } = require ('../db');
const axios = require ('axios');



const genresFromAPI = async () => {
    
    // busco la informacion de los generos desde la api
    const infoApi = (await axios.get(`${API_GENRES}${API_KEY}`)).data;
    // declaro un array remporal
    const temporalGenres = [];

    //extraigo los nombres de los generos y los pusheo al array
    for (const item of infoApi.results) {
        const genre = item.name;
        temporalGenres.push(genre);
    };

    //devuelvo el array ordenado
    return temporalGenres.sort();
};

const genresEnDB = async (array) => {

    for (const item of array) {

        try {
            // Comprobar si el genero ya existe en la DB
            const genreExist = await Genres.findOne({ where: { name: item}});

            if (!genreExist) {
                // si no existe se crea
                const genre = await Genres.create({name: item});
            }else {
                console.error(`El genero de nombre: ${item} ya existe!!!`);
            }
        } catch (error) {
            console.error(`Error al tratar de guardar los nombres`, error);
        }
    }
    // console.log("buscar los generos en la DB" + array);
    // return "peticion a generos DB!!!"
};

module.exports = {genresFromAPI, genresEnDB};