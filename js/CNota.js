
export class CTask {
    constructor(title, message, level) {
        this.title = title;
        this.message = message;
        this.level = level;
    }

    title = document.querySelector('#title');
    message = document.querySelector('#message');

    events(){
        
        const formulario = document.querySelector('#formulario').addEventListener('submit', addTask);
        const nivel = document.addEventListener('click', function (e) {
            var state ;
            if (e.target.classList[3] == 'btn-danger') {
                state = 'hight';
            } else if (e.target.classList[3] == 'btn-warning') {
                state = 'middle';
            } else {
                state = 'low';
            }
            return state;
        
        });
        console.log(nivel)
        function addTask(e){
            e.preventDefault();
            const card = document.createElement('div');
            const lista = document.querySelector('#lista');
            card.classList = 'card mt-1 ' + nivel;
            card.innerHTML = `
                <div class="card-block pl-2">
                    <h5 class="card-title">${title.value}</h5>
                    <p class="card-link my-0">${message.value}</p>
                    <div class="enlaces enlaces mr-2">
                        <a href="" class="card-link">editar</a>
                        <a href="" class="card-link">comentar</a>
                        <a href="" class="card-link">eliminar</a>
                    </div>
                </div>
            `;
            lista.appendChild(card);
        }

    }

    
    
    
}