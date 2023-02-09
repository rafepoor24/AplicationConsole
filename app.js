const yargs = require('./config/yargs');
const {crearArchivo}=require('./helpers/multiplicar')




crearArchivo(yargs.b,yargs.l,yargs.h)
.then(massage=>console.log(massage,'creado') )
.catch(err=>console.log(err));








