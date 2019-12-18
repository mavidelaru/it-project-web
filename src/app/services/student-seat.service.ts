import { Injectable } from '@angular/core';

@Injectable()
export class studentSeatService {
    // datos para obtener posición
    private studentSeat: StudentSeat[] = [
        {
            name: 'PANTINI, FABRIZIO',
            itinerary: 'Front End',
            position: 1   // x, y ?
        },
        {
            name: 'KONTAXIS, PANAGIOTIS',
            itinerary: 'Back End',
            position: 5
        },
        {
            name: 'SANCHEZ ABAD, JAVIER',
            itinerary: 'Front End',
            position: 2
        },
        {
            name: 'FERNANDEZ NAVARRO, CRISTINA',
            itinerary: 'Front End',
            position: 8
        },
        {
            name: 'LEON HIDALGO, ESPERANZA',
            itinerary: '.Net',
            position: 10
        },
        {
            name: 'CALVO RAMIREZ, JAVIER',
            itinerary: '.Net',
            position: 11
        },
        {
            name: 'URIZAR TORRICO, BARLAN TITO',
            itinerary: 'Front End',
            position: 13
        },
        {
            name: 'ARIAS PIFERRER, JUDIT',
            itinerary: 'Back End',
            position: 20
        },
        {
            name: 'BOLEA SANCHO, DAVID',
            itinerary: 'Back End',
            position: 21
        }
    ];

    constructor() {
        console.log("Service ready!");
    }
    // getter de la propiedad studentSeat
    getStudentSeat(): StudentSeat[] {
        return this.studentSeat;
    }
}

// corregir interface segun datos reales
export interface StudentSeat {
    name: string;
    itinerary: string;
    position: number;
}