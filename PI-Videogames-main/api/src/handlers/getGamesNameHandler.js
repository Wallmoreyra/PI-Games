const getGameByNameController = require('../controllers/getNameController');

const getGameByNameHandler = async (req, res) => {
    const {name} = req.query;

    try {
        const gameByName = await getGameByNameController(name);
        res.status(200).json(gameByName);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = getGameByNameHandler;