const getAllController = require('../controllers/getAllController');

const getAllHandler = async (rea, res) => {

    try{
        const response = await getAllController();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = getAllHandler;