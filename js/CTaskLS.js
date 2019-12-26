

export class CTaskLS{
    constructor(task) {
        this.task = task;
    }
    put() {
        let note;
        note = this.get();
        note.push(this.task);
        localStorage.setItem('notes', JSON.stringify(note));
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
