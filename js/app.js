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

import { CTask } from './CTask.js';
import { CInterfaz } from './CInterfaz.js';

const Task = new CTask("Ir al Super", "comprar pan y leche", 0);
const Interfaz = new CInterfaz();
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', addTask);
    
function addTask(e){
    e.preventDefault();

    Task.title = document.querySelector('#title').value;
    Task.message = document.querySelector('#message').value;
    Task.priority = document.querySelector('input[name="priority"]:checked').id;

    Interfaz.mostrarTask(Task.title, Task.message, Task.priority);
}