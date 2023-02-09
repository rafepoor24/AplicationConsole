
const yargs= require('yargs')
        .option('b',{
            alias:'base',
            demandOption:true,
            type:'number',
            describe:'La base de la tabla que deseas crear'

        })
        .option('l',{
            alias:'listar',
            demandOption:true,
            type:'boolean',
            default:false,
            describe:'Deseas mostrar la tabla a crear'

        })
        .option('h',{
            alias:'hasta',
            demandOption:true,
            type:'number',
            default:10,
            describe:'El rango que deseas motras de la tabla'

        })
        .check((yargs,options)=>{
            if (isNaN(yargs.b)){
                throw 'La base debe ser un numero'
            }
            return true;

        })
        .argv;

module.exports=yargs;