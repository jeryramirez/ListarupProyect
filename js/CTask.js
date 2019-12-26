import { CTaskLS } from "./CTaskLS.js";
import { CInterfaz } from "./CInterfaz.js";

export class CTask {
    constructor(title, message, priority) {
        this.title = title;
        this.message = message;
        this.priority = priority;
        this.task = {
            "title": this.title,
            "message": this.message,
            "priority": this.priority
        }
    }

    put() {
        const TaskLS = new CTaskLS(this.task);
        const Interfaz = new CInterfaz();

        TaskLS.put();
        Interfaz.show();
    }

    get() {
        const TaskLS = new CTaskLS();
        return TaskLS.get();
    }
}