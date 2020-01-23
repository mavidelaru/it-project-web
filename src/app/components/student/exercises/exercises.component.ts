import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../../services/exercise.service';
import { Exercise } from '../../global/tables/model/exercise';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {
  exercises: Exercise[] = [];
  constructor(private exerciseService: ExerciseService) {

  }

  ngOnInit() {
    this.exercises = this.exerciseService.getExercises();
    console.log(this.exercises);
    
  }

}
