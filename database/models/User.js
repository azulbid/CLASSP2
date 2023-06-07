module.exports = function(sequelize, dataTypes){
    let alias = 'User' //es el nombre del modelo en el controlador
    let cols = {
        id :{
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING
        },
        username: {
            type: dataTypes.STRING
        },
        contrasena : {
            type:dataTypes.STRING
        },
        fotodeperfil : {
            type:dataTypes.TEXT
        },
        fecha : {
            type:dataTypes.DATE
        },
        dni : {
            type:dataTypes.INTEGER
        },
        createdAt: {
            type:dataTypes.DATE
        },
        updatedAt: {
            type:dataTypes.DATE
        }
    }
    let config = {
        tableName: 'usuarios',
    }
    let user = sequelize.define(alias,cols,config);
    user.associate = function(models){
    user.hasMany(models.Product, {
        as: 'productos',
        foreignKey: 'id' //es id o id_post? 
    }) }
    return user
}