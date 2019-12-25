

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
    //Es recomendable escribir esta parte del codigo en una clase aparte especial para los almacenamientos en DB
    put() {
        let note;
        note = this.get();
        note.push(this.task);
        localStorage.setItem('notes', JSON.stringify(note));
        console.log(JSON.parse(localStorage.getItem('notes')));
    }

    get() {
        let note;
        if (localStorage.getItem('notes') === null) {
            note = [];
        } else {
            note = JSON.parse(localStorage.getItem('notes'));
        }
        return note;
    }
}