let procesos = []


const SistemaConfig = () => {
    let options2 = prompt('1 - Ver procesos existentes\n2 - Añadir un proceso\n3 - Eliminar proceso\nESC - SALIR')
    while(options2 !== 'ESC'){
        switch (options2) {
            case '1':
                if(procesos.length === 0){
                    alert('No hay procesos')
                    break
                }
                alert(ViewSistem())
                break;

            case '2':
                AddSistem()
                break;    
            case '3':

                
            default:
                break;
        }

        options2 = prompt('1 - Ver procesos existentes\n2 - Añadir un proceso\n3 - Eliminar proceso\nESC - SALIR')

    }
}

const DeleteSistem = () => {
    
}

const ViewSistem = () => {
    console.log(procesos)
    let content = 'Procesos:\n'
    for(i = 0; i<procesos.length; i++){
        const name = `Nombre: ${procesos[i].name} - Duracion: ${procesos[i].duration} - Cada Cuanto se ejecuta: ${procesos[i].tiempoIntervalo}\n`
        console.log(name)
        content += name
    }

    return content;

}

const AddSistem = () =>{
    const name = prompt('Ponga el nombre de su sistema')
    const duration = parseInt(prompt('Duracion del sistema al encenderse'))
    const intervaloEntreFuncion = parseInt(prompt('Cada cuanto se ejecutara'))

    const system = {
        name: name,
        duration: duration,
        tiempoIntervalo: intervaloEntreFuncion
    }
    console.log(system)
    procesos.push(system)
}

let options = prompt('1 - Encender sistema\n2 - Apagar sistemas\n3 - Configurar sistema\nESC - SALIR')

    while(options !== 'ESC'){
        switch(options){
            case '1':
                SistemaOn()
                break;
            case '2':
                console.log('carrito')
                break;
            case '3':
                SistemaConfig()
                break;
            case 'ESC':
                break;    
            default:
                alert('Esa opcion no es valida')   
        }

        options = prompt('1 - Encender sistema\n2 - Apagar sistema\n3 - Configurar sistema\nESC - SALIR')
    }