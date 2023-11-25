const { Videogame, Genres } = require('../db');
const axios = require('axios');
require('dotenv').config();
const {API_KEY, APi_BI_NAME}  = process.env;
const { Sequelize, Op} = require('sequelize');
const {genresFromAPI} = require('./funcGenres')


const searchNameDB = async (name) => {
    const existGameDB = await Videogame.findOne({where: {name}});
    return existGameDB;
};

const searchNameAPI = async (name) => {
    const infoApi = (await axios.get(`${APi_BI_NAME}${API_KEY}&search=${name}`)).data;
    if(infoApi.count !== 0){
        return infoApi;
    } else {
        return null;
    }
};

const searchGenresDB = async (genres) => {
    
    const genresGame = await genres.split(',').map(item => item.trim());
    const genreCount = await Genres.count();
    if(genreCount === 0){
        const generosAPI = await genresFromAPI();
        const lowerGames = genresGame.map(element => element.toLowerCase());
        const genresFiltered = generosAPI.filter(item => lowerGames.includes(item.toLowerCase()));
        const genresDB = await Genres.findAll({
            where: {
                name: {[Op.iLike]: { [Op.any]: genresFiltered }}
            }
        });

        return genresDB

    } else {

        const genresDB = await Genres.findAll({
            where: {
                name: {[Op.iLike]: { [Op.any]: genresGame }}
            }
        });

        return genresDB
    }



};

const createVideogameDB = async (name, descrip, platform, img, launchDate, rating, genresDB) => {

    try {
        
        const videogame = await Videogame.create({
            name,
            Description: descrip,
            platform:platform,
            img:img,
            released: launchDate,
            rating: rating
        });



        await videogame.addGenres(genresDB);

        const genresGames = await videogame.getGenres();

        const gameAndGenres = {
            name: videogame.name,
            Description: videogame.Description,
            Platform: videogame.platform,
            img: videogame.img,
            released: videogame.released,
            rating: videogame.rating,
            genres: genresGames.map(genre => genre.name)
        }


        return gameAndGenres;
    }catch (error) {
        throw new Error('Error al crear el Game en la DB: ' + error.message);
    }
};

module.exports = {searchGenresDB, searchNameDB, createVideogameDB, searchNameAPI };