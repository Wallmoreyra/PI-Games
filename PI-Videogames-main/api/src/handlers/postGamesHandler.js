const createGameDB = require("../controllers/postGameController");


const createGameHandler = async (req, res) => {

    const {name, descrip, platform, img, launchDate, rating, genres} = req.body;

    try{
        const response = await createGameDB(name, descrip, platform, img, launchDate, rating, genres);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = createGameHandler;