const { Router } = require('express');
const videoGamesRouter = require('./videogamesRoutes');
const genresRouter = require('./genresRoutes');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//ruta de juegos
router.use("/videogames", videoGamesRouter);

//ruta de generos
router.use("/genres", genresRouter);


module.exports = router;
