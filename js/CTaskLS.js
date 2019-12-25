

export class CTaskLS{

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
