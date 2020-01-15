import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../services/exercise.service';
import { Exercise } from '../global/tables/model/exercise';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private exerciseService: ExerciseService) { }


  ngOnInit() {
  }

}
