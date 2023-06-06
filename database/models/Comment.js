module.exports = function(sequelize, dataTypes){
    let alias = 'Comments' //es el nombre del modelo en el controlador
    let cols = {
        id :{
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_post: {
            type: dataTypes.INTEGER
        },
        id_usuario: {
            type: dataTypes.INTEGER
        },
        texto_comentario : {
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
        tableName: 'comentarios',
    }
    let comentarios = sequelize.define(alias,cols,config);

    comentarios.associate = function(models){
        comentarios.belongsTo(models.Products, {
            as: 'producto',
            foreignKey: 'id_post'
        }),
        comentarios.belongsTo(models.User, {
            as: 'usuario',
            foreignKey: 'id_usuario' 
        })
    }

    return comentarios
}