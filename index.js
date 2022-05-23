let procesos = []
let sistemaActivo = null


const SistemaConfig = () => {
    let options2 = prompt('1 - Ver procesos existentes\n2 - Añadir un proceso\n3 - Eliminar proceso\n4 - Selecionar proceso\nESC - SALIR')
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
                DeleteSistem()
            
            case '4':
                SelectSistem()
                console.log(sistemaActivo)
                
            default:
                break;
        }

        options2 = prompt('1 - Ver procesos existentes\n2 - Añadir un proceso\n3 - Eliminar proceso\n4 - Selecionar proceso\nESC - SALIR')

    }
}

const SelectSistem = () => {
    let content = 'Seleccionar id:\n'
    for(i = 0; i<procesos.length; i++){
        const name = `Opcion: ${i} = Nombre: ${procesos[i].name} - Funcion: ${procesos[i].func} - Duracion: ${procesos[i].duration} - Cada Cuanto se ejecuta: ${procesos[i].tiempoIntervalo}\n`
        content += name
    }
    const selec = prompt(content)
    sistemaActivo = procesos[selec]

}

const DeleteSistem = () => {
    let content = 'Eliminar:\n'
    for(i = 0; i<procesos.length; i++){
        const name = `Proceso: ${procesos[i].name}\n`
        
        content += name
    }
    const eliminar = prompt(content)
    procesos = procesos.filter((item) => item.name !== eliminar);
    console.log(procesos)


}

const ViewSistem = () => {
    console.log(procesos)
    let content = 'Procesos:\n'
    for(i = 0; i<procesos.length; i++){
        const name = `Nombre: ${procesos[i].name} - Funcion: ${procesos[i].func} - Duracion: ${procesos[i].duration} - Cada Cuanto se ejecuta: ${procesos[i].tiempoIntervalo}\n`
        console.log(name)
        content += name
    }

    return content;

}

const AddSistem = () =>{
    const name = prompt('Ponga el nombre de su sistema')
    const func = prompt('Que hace')
    const duration = parseInt(prompt('Duracion del sistema al encenderse EN SEGUNDOS'))
    const intervaloEntreFuncion = parseInt(prompt('Cada cuanto se ejecutara EN SEGUNDOS'))

    const system = {
        name: name,
        func: func,
        duration: duration,
        tiempoIntervalo: intervaloEntreFuncion
    }
    console.log(system)
    procesos.push(system)
}

const TurnOnSistem = () => {
    const ejecutar = setInterval(function () {

        alert('JOLA')

    }, 3000)

}

let options = prompt('1 - Encender sistema\n2 - Apagar sistemas\n3 - Configurar sistema\nESC - SALIR')

while(options !== 'ESC'){
    switch(options){
        case '1':
            TurnOnSistem()
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
