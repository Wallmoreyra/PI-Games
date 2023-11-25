const {Videogame} = require('../db');
const {Op, Sequelize} = require('sequelize');
const axios = require('axios');
const {getGameByID} = require('./funcGamesID');
const {infoCleanerAPI} = require('./funcName');
require('dotenv').config();
const {API_KEY, IMG_URL, API_ALL_GAMES, SIZE}  = process.env;

const getAllGamesDB = async () => {
    const allGamesDB = await Videogame.findAll();
    const gamesID = allGamesDB.map(game => game.id);
    const arrayGames = [];
    const detail = "no";
    for(const id of gamesID){
        try{
            const gameInfo = await getGameByID(id, detail);
            arrayGames.push(gameInfo);
        } catch (error) {
            console.error(`Error al obtener datos del game con ID ${id}: ${error.message}`);
        }

    }
    //console.log(arrayGames)
    return arrayGames;
};

const getAllGamesAPI = async() => {
    try{
        const infoApi = (await axios.get(`${API_ALL_GAMES}?key=${API_KEY}&page_size=${SIZE}`)).data;
        const arrayAPI = await infoCleanerAPI(infoApi.results);
        return arrayAPI;
    } catch (error) {
        console.error(`Error al obtener datos de los games: ${error.message}`);
    }
};

module.exports = {getAllGamesDB, getAllGamesAPI}