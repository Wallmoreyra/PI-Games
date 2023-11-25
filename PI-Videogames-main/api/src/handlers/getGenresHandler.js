const genresController = require('../controllers/getGenresController');

const genresHandler = async(req, res) => {
    try {
        //console.log("peticion a generos!!!")
        const genresAPI = await genresController();
        res.status(200).json(genresAPI);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = genresHandler;