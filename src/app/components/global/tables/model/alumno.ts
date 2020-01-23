import { stringify } from 'querystring';

export class Alumno {

  name: string;
  lastname: string;
  absences: number;
  startDate: Date;
  limitDate: Date;
  mail: string;
  itinerary: string;

  constructor(name: string, lastname: string, absences: number, startDate: Date, limitDate: Date, mail: string, itinerary: string) {
    this.name = name;
    this.lastname = lastname;
    this.absences = absences;
    this.startDate = startDate;
    this.limitDate = limitDate;
    this.mail = mail;
    this.itinerary = itinerary;
  }
}
