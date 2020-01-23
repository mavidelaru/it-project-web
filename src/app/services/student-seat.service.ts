import { Injectable } from '@angular/core';

@Injectable()
export class StudentSeatService {
    // datos (falsos) para obtener posición
    private students: StudentSeat[] = [
        {
            name: 'PERALTA, FABRIZIO',
            itinerary: 'Front End',
            position: 0,
            gender: 'M'
        },
        {
            name: 'GUZMAN, PEDRO',
            itinerary: 'Back End',
            position: 1,
            gender: 'M'
        },
        {
            name: 'SOMEONE, ANYONE',
            itinerary: 'Front End',
            position: 2,
            gender: 'F'
        },
        {
            name: 'SANCHEZ, XAVI',
            itinerary: '.Net',
            position: 3,
            gender: 'M'
        },
        {
            name: 'FERNANDEZ, MÓNICA',
            itinerary: 'Back End',
            position: 4,
            gender: 'F'
        },
        {
            name: 'LEON, EL REY',
            itinerary: 'Front End',
            position: 5,
            gender: 'M'
        },
        {
            name: 'CALVO, FERNANDO',
            itinerary: '.Net',
            position: 6,
            gender: 'M'
        },
        {
            name: 'URIZAR, PEPE',
            itinerary: 'Back End',
            position: 7,
            gender: 'M'
        },
        {
            name: 'ARIAS, JOANA',
            itinerary: 'Front End',
            position: 8,
            gender: 'F'
        },
        {
            name: 'BOLEA, JAVIER',
            itinerary: 'Front End',
            position: 9,
            gender: 'M'
        },
        {
            name: 'SABATER, MIRIAM',
            itinerary: '.Net',
            position: 10,
            gender: 'F'
        },
        {
            name: 'GIL, GILBERTO',
            itinerary: 'Back End',
            position: 11,
            gender: 'M'
        },
        {
            name: 'ROVIRA, MERCEDES',
            itinerary: 'Back End',
            position: 12,
            gender: 'F'
        },
        {
            name: 'PLA, JORDI',
            itinerary: 'Front End',
            position: 13,
            gender: 'M'
        },
        {
            name: 'SABATE, GERARD',
            itinerary: '.Net',
            position: 14,
            gender: 'M'
        },
        {
            name: 'SMITH, MIKE',
            itinerary: '.Net',
            position: 15,
            gender: 'M'
        },
        {
            name: 'LOPEZ, CELIA',
            itinerary: 'Front End',
            position: 16,
            gender: 'F'
        },
        {
            name: 'VIDAL, CECILIA',
            itinerary: 'Front End',
            position: 17,
            gender: 'F'
        },
        {
            name: 'CORTES, JUAN',
            itinerary: 'Front End',
            position: 18,
            gender: 'M'
        },
        {
            name: 'ALVAREZ, JAIME',
            itinerary: 'Back End',
            position: 19,
            gender: 'M'
        },
        {
            name: 'BECERRA, ELIANA',
            itinerary: 'Front End',
            position: 20,
            gender: 'F'
        },
        {
            name: 'FABREGAS, MARTA',
            itinerary: 'Front End',
            position: 21,
            gender: 'F'
        },
        {
            name: 'SANCHEZ, ROBERTO',
            itinerary: 'Front End',
            position: 22,
            gender: 'M'
        },
        {
            name: 'BLASCO, JUAN',
            itinerary: 'Front End',
            position: 23,
            gender: 'M'
        },
        {
            name: 'LESCANO, MARIELA',
            itinerary: 'Front End',
            position: 24,
            gender: 'F'
        },
        {
            name: 'FERNANDEZ, DANIEL',
            itinerary: 'Front End',
            position: 25,
            gender: 'M'
        },
        {
            name: 'SAURA, ALFONSO',
            itinerary: 'Front End',
            position: 26,
            gender: 'M'
        },
        {
            name: 'SASTRE, LUIS',
            itinerary: 'Front End',
            position: 27,
            gender: 'M'
        },
        {
            name: 'CASTRO, DARIO',
            itinerary: 'Back End',
            position: 28,
            gender: 'M'
        },
        {
            name: 'SUAREZ, DANIEL',
            itinerary: 'Back End',
            position: 29,
            gender: 'M'
        },
        {
            name: 'CANALS, JOAN',
            itinerary: '.Net',
            position: 30,
            gender: 'M'
        },
        {
            name: 'MUÑOZ, PEPE',
            itinerary: '.Net',
            position: 31,
            gender: 'M'
        },
        {
            name: 'PASCUAL, RODRIGO',
            itinerary: '.Net',
            position: 32,
            gender: 'M'
        },
        {
            name: 'MARGALEF, JAUME',
            itinerary: '.Net',
            position: 33,
            gender: 'M'
        },
        {
            name: 'GONZALEZ, JUANA',
            itinerary: 'Front End',
            position: 34,
            gender: 'F'
        },
        {
            name: 'PEÑA, FABIO',
            itinerary: 'Front End',
            position: 35,
            gender: 'M'
        },
        {
            name: 'BONET, ORIOL',
            itinerary: 'Front End',
            position: 36,
            gender: 'M'
        },
        {
            name: 'VERGES, CAMILO',
            itinerary: 'Back End',
            position: 37,
            gender: 'M'
        },
        {
            name: 'VALLVERDU, SERGI',
            itinerary: 'Back End',
            position: 38,
            gender: 'M'
        },
        {
            name: 'MORALES, SILVIA',
            itinerary: 'Back End',
            position: 39,
            gender: 'F'
        },
        {
            name: 'ASENSIO, ANA',
            itinerary: 'Back End',
            position: 40,
            gender: 'F'
        },
        {
            name: 'CASTRO, LUCIANA',
            itinerary: 'Back End',
            position: 41,
            gender: 'F'
        },
        {
            name: 'PAZOS, PEDRO',
            itinerary: 'Back End',
            position: 42,
            gender: 'M'
        },
        {
            name: 'CASTRO, ALEJANDRO',
            itinerary: 'Back End',
            position: 43,
            gender: 'M'
        },
        {
            name: 'CAMPO, ARTURO',
            itinerary: 'Back End',
            position: 44,
            gender: 'M'
        },
        {
            name: 'FERNANDEZ, VIRGINIA',
            itinerary: 'Back End',
            position: 45,
            gender: 'F'
        },
        {
            name: 'GIL, ANA',
            itinerary: 'Front End',
            position: 46,
            gender: 'F'
        },
        {
            name: 'MUÑOZ, JOAN',
            itinerary: 'Front End',
            position: 47,
            gender: 'M'
        },
        {
            name: 'RODRIGUEZ, JONATAN',
            itinerary: 'Front End',
            position: 48,
            gender: 'F'
        },
        {
            name: 'CID, CAMPEADOR',
            itinerary: 'Front End',
            position: 49,
            gender: 'M'
        },
        {
            name: 'GARCIA, MARIO',
            itinerary: 'Front End',
            position: 50,
            gender: 'M'
        },
        {
            name: 'PEREZ, EVA',
            itinerary: 'Back End',
            position: 51,
            gender: 'F'
        },
        {
            name: '',
            itinerary: '',
            position: 52,
            gender: ''
        },
        {
            name: '',
            itinerary: '',
            position: 53,
            gender: ''
        },
        {
            name: 'SANCHEZ, LEON',
            itinerary: 'Back End',
            position: 54,
            gender: 'M'
        },
        {
            name: 'TORRES, ANGELA',
            itinerary: 'Back End',
            position: 55,
            gender: 'F'
        },
        {
            name: 'PAZOS, EMILIO',
            itinerary: 'Back End',
            position: 56,
            gender: 'M'
        },
        {
            name: '',
            itinerary: '',
            position: 57,
            gender: ''
        },
        {
            name: 'RIERA, ALBERT',
            itinerary: 'Front End',
            position: 58,
            gender: 'M'
        },
        {
            name: 'ARCE, MARIA',
            itinerary: 'Front End',
            position: 59,
            gender: 'F'
        }

    ];

    constructor() {
        console.log('Service ready!');
    }

    getStudentSeat(): StudentSeat[] {
        return this.students;
    }

}

// corregir interface con datos reales
export interface StudentSeat {
    name: string;
    itinerary: string;
    position: number;
    gender: string;
}
