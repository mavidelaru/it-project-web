import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../services/exercise.service';
import { Exercise } from '../global/tables/model/exercise';
import { StudentSearchService } from 'src/app/services/student-search.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {


  constructor(private exerciseService: ExerciseService, private search: StudentSearchService) {
    search.page = 'student';
  }

  ngOnInit() {
  }

}
