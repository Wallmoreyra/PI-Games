const getGameByIDController = require('../controllers/getIdController');

const getGameIDHandler = async (req, res) => {
    const {id} = req.params;
    

    try {
        const source = isNaN(id) ? "bdd" : "api";
        const response = await getGameByIDController(id, source);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = getGameIDHandler;