/*
El archivo App.js se utiliza para:
- Importar
- Crear Eventos
- Llamar Eventos
- Crear Instancias
- Crear variables globales

La Clase Interfaz se utiliza para:
- Validacion de campos
- Validacion de Errores
- Crear Elementos en el DOM
- Eliminar Elementos en el DOM

Las Clases independientes se utilizan para:
- Crear Funciones para procesar sus datos
*/

//IMPORTACIONES
import { CTask } from './CTask.js';
import { CInterfaz } from './CInterfaz.js';

const Interfaz = new CInterfaz();

//const list = document.querySelector('#lista');

//PROGRAMACION
document.querySelector('#formulario').addEventListener('submit', addTask);
document.addEventListener('DOMContentLoaded', Interfaz.show)



function addTask(e){
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const message = document.querySelector('#message').value;
    let priority = document.querySelector('input[name="priority"]:checked');
    priority = priority != undefined ? priority.id : undefined;

    const Task = new CTask(title, message, priority);

    if (Task.title === '' || Task.message === '' || Task.priority === undefined) {

        Interfaz.validarCampos();
        
    } else {
        
        Task.put();

        document.querySelector('#title').value = '';
        document.querySelector('#message').value = '';
    }

}


/*function deleteTask(e) {
    e.preventDefault();
    const element = e.target;
    if (element.id == 'delete') {
        Interfaz.eliminarTask(element);
    }
}*/