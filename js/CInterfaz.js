import { CTaskLS } from "./CTaskLS.js";

export class CInterfaz{

    
    show() {
        const TaskLS = new CTaskLS();

        let lista = document.querySelector('#lista');
        lista.innerHTML = `
        
        `;
        

        TaskLS.get().forEach( task => {
            const card = document.createElement('div');
            
            card.classList = 'card mt-1 ' + task.priority;
            card.innerHTML =`
            <div id="card" class="card-block pl-2">
                <h5 class="card-title">${task.title}</h5>
                <p class="card-link my-0">${task.message}</p>
                <div class="enlaces enlaces mr-2">
                    <a href="#" class="card-link">editar</a>
                    <a href="#" class="card-link">comentar</a>
                    <a href="#" id="delete" class="card-link">eliminar</a>
                </div>
            </div>
            `;

            lista.appendChild(card);

        });
    }

    eliminarTask(element) {
        element.parentElement.parentElement.parentElement.remove();
    }

    validarCampos() {
        const div = document.querySelector('#alert');
        const alert = document.createElement('div');
        alert.classList = 'alert alert-danger';
        alert.innerHTML = `
        complete todos los campos y asigne un nivel de prioridad
        `;
        div.appendChild(alert);
        setTimeout(() => {
            alert.remove();
        }, 3000);

    }
}

