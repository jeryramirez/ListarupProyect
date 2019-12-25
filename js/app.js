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

//INSTANCIACION DE OBJETOS

const Interfaz = new CInterfaz();

//CAPTURA DE EVENTOS
const formulario = document.querySelector('#formulario');
const list = document.querySelector('#lista');

//EVENTOS
formulario.addEventListener('submit', addTask);
list.addEventListener('click', deleteTask);

//PROGRAMACION
function addTask(e){
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const message = document.querySelector('#message').value;
    const priority = document.querySelector('input[name="priority"]:checked');

    if (title === '' || message === '' || priority === null) {

        Interfaz.camposVacios();
        

    } else {

        const Task = new CTask(title, message, priority.id);
        Task.put();
    }
}

function deleteTask(e) {
    e.preventDefault();
    const element = e.target;
    if (element.id == 'delete') {
        Interfaz.eliminarTask(element);
    }
}