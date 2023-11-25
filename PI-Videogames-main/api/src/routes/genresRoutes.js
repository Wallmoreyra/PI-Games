const { Router } = require('express');
const genresHandler = require('../handlers/getGenresHandler');

const genresRouter = Router();

// peticion de GET
genresRouter.get("/", genresHandler);


module.exports = genresRouter;