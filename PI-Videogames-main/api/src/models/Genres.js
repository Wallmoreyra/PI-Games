const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize

module.exports = (sequelize) => {
    // Defino el modelo
    sequelize.define('genres', {
        //MODELO 2 | Genres - ID. -Nombre.
        id: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    },
    {timestamps: false}
    );
};