
//sequelize: lo utilizamos para acceder a su metodo define, es un objeto literal
//datatypes es un objeto, para definir los tipos de datos que tienen cada columna de la tabla
module.exports = function(sequelize, dataTypes){
    let alias = 'Products' //es el nombre del modelo en el controlador
    //cols son las columnas
    //columna que no acalramos, sequelize no la recupera; no se puede usar en otra parte del codigo 
    //type esta siempre
    let cols = {
        id :{
            primaryKey: true,
            autoIncrement: true,
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
        },
        imagenes: {
            type: dataTypes.TEXT
        }
    }
    //nombre de la tabla; como lo hicimos en spanglish aclaramos
    let config = {
        tableName: 'productos',
    }
    
    //usamos define para darle cierre
    //el metodo define lo usamos para definir en sequelize nuestra tabla; en este caso la variable products
    //alias; sirve para dsp llamar al modelo en el controlador
    //cols es columnas
    //config (optativo): configuracion adicional
    let products = sequelize.define(alias,cols,config);

    //products (variable) es el metodo define, lo que devuelve el modelo
    //propiedad associate para hacer las relaciones
    //relacion uno a muchos: belongsTo y hasMany 
    products.associate = function(models){
        products.belongsTo(models.User, {
            as: 'usuario',
            foreignKey: 'id_usuario'
        }),
        //la foreignKey: conectar a las dos columnas (en este caso al usuario con su id, relaciona ambas tablas)
        //as define un alias para usar en el controlador 
        products.hasMany(models.Comments, {
            as: 'comentarios',
            foreignKey: 'id_post' 
        })
    }

    return products
    //devuelve lo que hace la funcion
}