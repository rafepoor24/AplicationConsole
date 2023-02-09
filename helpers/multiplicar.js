const fs=require('fs');
const colors=require('colors');
const crearArchivo=async(base=5,listar=false,hasta)=>{

try {
    
    
    
    let salida, consola='';
    for(let i=1;i<=hasta;i++){
        salida +=`${base} x ${i} = ${base}\n`;
        consola +=`${base} ${'x'.green} ${i} ${'='.green} ${base}\n`;
    }
    if (listar) {
        console.log(colors.green('============'));
    console.log('TABLA CON BASE '.red, colors.blue(base));
    console.log(colors.green('============'));

    console.log(consola);


    }
    
    fs.writeFileSync(`./tables/table-${base}.txt`,salida);
    return (colors.rainbow(`table-${base}.txt`));
    
} catch (error) {
throw(error);
}


    
};

module.exports={crearArchivo};
