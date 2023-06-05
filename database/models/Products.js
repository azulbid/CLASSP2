module.exports = function(sequelize, dataTypes){
    let alias = 'Products' //es el nombre del modelo en el controlador
    let cols = {
        id :{
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_usuario: {
            type: dataTypes.INTEGER
        },
        nombreproducto: {
            type: dataTypes.STRING
        },
        descripcionproducto : {
            type:dataTypes.STRING
        },
        createdAt: {
            type:dataTypes.DATE
        },
        updatedAt: {
            type:dataTypes.DATE
        }
    }
    let config = {
        tableName: 'productos',
    }
    let products = sequelize.define(alias,cols,config);

    products.associate = function(models){
        products.belongsTo(models.User, {
            as: 'usuario',
            foreignKey: 'id_usuario'
        }),
        products.hasMany(models.Comments, {
            as: 'comentarios',
            foreignKey: 'id_post' 
        })
    }

    return products
}