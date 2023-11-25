const { Videogame, Genres } = require('../db');
require('dotenv').config();
const {API_KEY, API_BI_ID, IMG_URL}  = process.env;
const axios = require('axios');


const getGameByID = async (id, detail) => {
    const gam = await Videogame.findByPk(id, {
        include: Genres.name,
    });

    if(gam === "" || gam === null){
        throw new Error("No se encontro el game con esa Id en la DB!!!");
    }
    const genresWhitGame = await gam.getGenres();

    if(detail === "no"){
        return gameAndGenre = {
            id:gam.id,
            name: gam.name,
            img: gam.img,
            rating: parseFloat(gam.rating),
            genres:genresWhitGame.map(genre => genre.name)
        };

    }
    return gameAndGenre = {
        id:gam.id,
        name: gam.name,
        img: gam.img,
        platform: gam.platform.split(','),
        Description: gam.Description,
        released: gam.released,
        rating: parseFloat(gam.rating),
        genres:genresWhitGame.map(genre => genre.name)
    };


};
const getGameByIDAPI = async (id) => {
    try{
        const infoApi = (await axios.get(`${API_BI_ID}${id}?key=${API_KEY}`)).data;
        const gameInfo = infoCleanerAPI(infoApi);
        return gameInfo;
    } catch (error) {
        console.error(`Error al obtener datos del game de id: ${id}`);
    }
}

const infoCleanerAPI = (info) => {

    
        const genreDefault = ['Indie','RPG'];
        const imgDefault = IMG_URL;
        const imgGame = info.background_image;
        const imagenGame = (imgGame === "" || imgGame === null) ? imgDefault : imgGame;
        const platInfo = info.platforms.map(platform => platform.platform.name);
        const platDefault = ["PC"];
        const platArray = (platInfo === "" || platInfo === null) ? platDefault : platInfo;
        const infoComplete = info.description;
        const infoDefault = "No posee descripcion alguna!!!!";
        const infoDescrip = (infoComplete === "" || infoComplete === null) ? infoDefault : infoComplete.replace(/<[^>]*>/g, '');
        const arrayGenre = info.genres.length > 0 ? info.genres.map(genre => genre.name) : genreDefault;
        
        return {
            id: info.id,
            name: info.name,
            img: imagenGame,
            platform: platArray,
            Description: infoDescrip,
            released: info.released,
            rating: info.rating,
            genres: arrayGenre,
            created: false
            
        }
    
};

module.exports = {getGameByID, getGameByIDAPI}