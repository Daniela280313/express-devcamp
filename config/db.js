const sequelize = require('./seq')
const colors = require('colors')

//funcion para conectarme a la base de datos

const connectDB = async ()=>{
    try{
  await sequelize.authenticate()
  console.log('Conectado a servidor mysql'.bgGreen)
    }catch (error){
    console.log(error)
    }
}

module.exports = connectDB