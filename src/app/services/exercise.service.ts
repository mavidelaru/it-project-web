import { Injectable } from '@angular/core';
import { Exercise } from '../components/global/tables/model/exercise';


@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private exercises: Exercise[] = [
    {
      name: "GitHub",
      state: "Corregido",
      date: new Date(2019, 7, 2)
    },
    {
      name: "USFlights",
      state: "A revisar",
      date: new Date(2019, 7, 10)
    },
    {
      name: "Projecte Fase 1-2 (HTML)",
      state: "Entregado",
      date: new Date(2019, 7, 12)
    },
    {
      name: "Projecte Fase 2 (Funcionalidad)",
      state: "Corregido",
      date: new Date(2019, 7, 19)
    }
  ];


  constructor() { }

  getExercises(): Exercise[] {
    return this.exercises;
  }
}

