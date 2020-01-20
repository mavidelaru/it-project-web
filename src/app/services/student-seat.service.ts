import { Injectable } from '@angular/core';

@Injectable()
export class StudentSeatService {
    // datos (falsos) para obtener posición
    private students: StudentSeat[] = [
        {
            name: 'PANTINI, FABRIZIO',
            itinerary: 'Front End',
            position: 1
        },
        {
            name: 'KONTAXIS, PANAGIOTIS',
            itinerary: 'Back End',
            position: 2
        },
        {
            name: 'SOMEONE ANYONE',
            itinerary: 'Front End',
            position: 3
        },
        {
            name: 'SANCHEZ ABAD, JAVIER',
            itinerary: '.Net',
            position: 4
        },
        {
            name: 'FERNANDEZ NAVARRO, CRISTINA',
            itinerary: 'Back End',
            position: 5
        },
        {
            name: 'LEON HIDALGO, ESPERANZA',
            itinerary: 'Front End',
            position: 6
        },
        {
            name: 'CALVO RAMIREZ, JAVIER',
            itinerary: '.Net',
            position: 7
        },
        {
            name: 'URIZAR TORRICO, BARLAN TITO',
            itinerary: 'Back End',
            position: 8
        },
        {
            name: 'ARIAS PIFERRER, JUDIT',
            itinerary: 'Front End',
            position: 9
        },
        {
            name: 'BOLEA SANCHO, DAVID',
            itinerary: 'Front End',
            position: 10
        },
        {
            name: 'PUNTI SABATES, CRISTIAN',
            itinerary: '.Net',
            position: 11
        },
        {
            name: 'VIADER SAURET, GILBERT',
            itinerary: 'Back End',
            position: 12
        },
        {
            name: 'BARBARA ROVIRA, ZOE',
            itinerary: 'Back End',
            position: 13
        },
        {
            name: 'MARCH VERA, JORDI',
            itinerary: 'Front End',
            position: 14
        },
        {
            name: 'SABATE FABREGAT, JAUME',
            itinerary: '.Net',
            position: 15
        },
        {
            name: 'AKSIMENKO, EVGENI',
            itinerary: '.Net',
            position: 16
        },
        {
            name: 'TIMILSINA, BINAY',
            itinerary: 'Front End',
            position: 17
        },
        {
            name: 'VIDAL PANIAGUA, ANDREA',
            itinerary: 'Front End',
            position: 18
        },
        {
            name: 'CORTES NIEVES, PEDRO',
            itinerary: 'Front End',
            position: 19
        },
        {
            name: 'MAÑÁ ALVAREZ, DAVID',
            itinerary: 'Back End',
            position: 20
        },
        {
            name: 'MATALLANES BECERRA, MIQUEL',
            itinerary: 'Front End',
            position: 21
        },
        {
            name: 'FABREGAS SALINAS, CRISTIAN',
            itinerary: 'Front End',
            position: 22
        },
        {
            name: 'HASANBASIC GAZIVODA, VEDRANA',
            itinerary: 'Front End',
            position: 23
        },
        {
            name: 'MINGUELLA BLASCO, DANIEL',
            itinerary: 'Front End',
            position: 24
        },
        {
            name: 'LESCANO CORREA, MAGALI',
            itinerary: 'Front End',
            position: 25
        },
        {
            name: 'FERNANDEZ SUNYER, MAYA',
            itinerary: 'Front End',
            position: 26
        },
        {
            name: 'SAURA GARCIA, LUIS ALFONSO',
            itinerary: 'Front End',
            position: 27
        },
        {
            name: 'CASTRO SASTRE, RODRIGO',
            itinerary: 'Front End',
            position: 28
        },
        {
            name: 'SCATTOLINI, DARIO NICOLAS',
            itinerary: 'Back End',
            position: 29
        },
        {
            name: 'BELLINI, DANIEL',
            itinerary: 'Back End',
            position: 30
        },
        {
            name: 'CANALS REIG, JAUME',
            itinerary: '.Net',
            position: 31
        },
        {
            name: 'CEVAS MUÑOZ, RODRIGO IGNACIO',
            itinerary: '.Net',
            position: 32
        },
        {
            name: 'PASCUAL AGROMAYOR, ANA',
            itinerary: '.Net',
            position: 33
        },
        {
            name: 'MARGALEF RIESTRA, XAVIER',
            itinerary: '.Net',
            position: 34
        },
        {
            name: 'GONZALEZ VERGES, JORDI',
            itinerary: 'Front End',
            position: 35
        },
        {
            name: 'VILLEGAS PEÑA, CRISTIAN DANIEL',
            itinerary: 'Front End',
            position: 36
        },
        {
            name: 'BONET VALLVERDU, JORDI',
            itinerary: 'Front End',
            position: 37
        },
        {
            name: 'ZAJARA CAMILO, ALVARO',
            itinerary: 'Back End',
            position: 38
        },
        {
            name: 'BENEJAM MINGORANCE, SERGI',
            itinerary: 'Back End',
            position: 39
        },
        {
            name: 'GULYAEVA, ANASTASIA',
            itinerary: 'Back End',
            position: 40
        },
        {
            name: 'DEL MORAL ASENSIO, JAVIER',
            itinerary: 'Back End',
            position: 41
        },
        {
            name: 'CASTRO, ABRAHAM',
            itinerary: 'Back End',
            position: 42
        },
        {
            name: 'PRADO ROMERO, ARTURO ELMER',
            itinerary: 'Back End',
            position: 43
        },
        {
            name: 'LOPEZ MUÑOZ, PEDRO ALEJANDRO',
            itinerary: 'Back End',
            position: 44
        },
        {
            name: 'FERNANDEZ ARAMBURU LUMBIARRES, BEGOÑA',
            itinerary: 'Back End',
            position: 45
        },
        {
            name: 'FERNANDEZ FIAÑO, DANIEL',
            itinerary: 'Back End',
            position: 46
        },
        {
            name: 'CAMPO LEMUS, ANA VIRGINIA',
            itinerary: 'Front End',
            position: 47
        },
        {
            name: 'SCHVARZMAN MUÑOZ, PABLO',
            itinerary: 'Front End',
            position: 48
        },
        {
            name: 'LLEDO LLACER, JONATAN',
            itinerary: 'Front End',
            position: 49
        },
        {
            name: 'CID RODRIGUEZ, CRISTINA',
            itinerary: 'Front End',
            position: 50
        },
        {
            name: 'ASENSIO GARCIA, MARIO',
            itinerary: 'Front End',
            position: 52
        },
        {
            name: 'PEREIRA, EVANDRO',
            itinerary: 'Back End',
            position: 51
        },
        {
            name: 'ELIAS LAIRET, ALI TIUNA',
            itinerary: 'Back End',
            position: 54
        },
        {
            name: '',
            itinerary: '',
            position: 53
        },
        {
            name: '',
            itinerary: '',
            position: 55
        },
        {
            name: 'SANCHEZ FLORIDO, MIGUEL ANGEL',
            itinerary: 'Back End',
            position: 56
        },
        {
            name: 'NICODEMUS DE TORRES, ANGEL',
            itinerary: 'Back End',
            position: 57
        },
        {
            name: 'PAZOS ANANIA, EMILIANO',
            itinerary: 'Back End',
            position: 59
        },
        {
            name: '',
            itinerary: '',
            position: 60
        },
        {
            name: 'SOMEONE ANYONE',
            itinerary: 'Front End',
            position: 58
        }

    ];

    constructor() {
        console.log('Service ready!');
    }

    getStudentSeat(): StudentSeat[] {
        return this.students;
    }

    getStudentPosition() {
        let seat;
        for (let i = 0; i<this.students.length; i++) {
            seat = this.students[i].position;
        }
        console.log(seat);
    } 

}

// corregir interface con datos reales
export interface StudentSeat {
    name: string;
    itinerary: string;
    position: number;
}
