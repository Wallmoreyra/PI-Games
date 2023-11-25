const {Videogame} = require('../db');
const {Op, Sequelize} = require('sequelize');
const axios = require('axios');
const {getGameByID} = require('./funcGamesID');
require('dotenv').config();
const {API_KEY, APi_BI_NAME, IMG_URL}  = process.env;




const gamesFromDB = async (name) => {
    const gamesDB = await Videogame.findAll({where:{
        [Op.or]: [
            Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('name')),{
                [Op.iLike]: `%${name.toLowerCase()}%`
            })
        ]}
    });

    const gamesID = gamesDB.map(game => game.id);
    const arrayGame = [];
    for(const id of gamesID){
        try{
            const detail = "no";
            const gameInfo = await getGameByID(id, detail);
            arrayGame.push(gameInfo);
        } catch (error) {
            console.error(`Error al obtener datos del game con ID: ${id}: ${error.message}`);
        }
    }
    return arrayGame;
};

const gamesFromAPI = async (name) => {

    try{
        const infoApi = (await axios.get(`${APi_BI_NAME}${API_KEY}&search=${name}`)).data;
        //console.log(infoApi.results);
        const gamesAPI = infoCleanerAPI(infoApi.results);
        //console.log(gamesAPI)
        return gamesAPI;
    } catch (error) {
        console.error(`Error al obtener datos del game: ${name} de la API`)
    }
    //return name;
};

const infoCleanerAPI = (array) => {

    return array.map((gam) => {
        const genreDefault = ['Indie','RPG'];
        const imgDefault = IMG_URL;
        const imgGame = gam.background_image;
        const imagenGame = (imgGame === "" || imgGame === null) ? imgDefault : imgGame;
        const arrayGenre = gam.genres.length > 0 ? gam.genres.map(genre => genre.name) : genreDefault;
        return {
            id: gam.id,
            name: gam.name,
            img: imagenGame,
            rating: gam.rating,
            genres: arrayGenre,
            created: false
        }
    });
};

module.exports = {gamesFromDB, gamesFromAPI,infoCleanerAPI}