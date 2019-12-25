import { CTaskLS } from "./CTaskLS.js";

export class CTask {
    constructor(title, message, level) {
        this.title = title;
        this.message = message;
        this.level = level;
        this.task = {
            "title": this.title,
            "message": this.message,
            "level": this.level
        }
    }

    TaskLS = new CTaskLS(this.task);

    put() {
        this.TaskLS.put();
    }

    get() {
        this.TaskLS.get();
    }
}