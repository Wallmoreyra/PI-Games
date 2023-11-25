const { Router } = require('express');
const getAllHandler = require('../handlers/getAllGamesHandler');
const getGameIDHandler = require('../handlers/getGameIDHandler');
const getGameByNameHandler = require('../handlers/getGamesNameHandler');
const createGameHandler = require('../handlers/postGamesHandler');


const videoGamesRouter = Router();

// peticiones de GET
videoGamesRouter.get("/", getAllHandler);
videoGamesRouter.get("/idGame/:id", getGameIDHandler);
videoGamesRouter.get("/name", getGameByNameHandler);


// peticiones de POST
videoGamesRouter.post("/", createGameHandler);


module.exports = videoGamesRouter;