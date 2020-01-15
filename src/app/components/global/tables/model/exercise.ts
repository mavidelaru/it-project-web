export class Exercise {
    name: string;
    state: string;
    date?: Date;

    constructor(name: string, state: string, date?: Date) {
        this.name = name;
        this.state = state;
        this.date = date;


    }

}