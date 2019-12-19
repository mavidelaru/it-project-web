export class Alumno {

  name: string;
  lastname: string;
  absences: number;
  limitDate: Date;

  constructor(name: string, lastname: string, absences: number, limitDate: Date) {
    this.name = name;
    this.lastname = lastname;
    this.absences = absences;
    this.limitDate = limitDate;

  }
}
