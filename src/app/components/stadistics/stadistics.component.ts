import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
import { Student } from '../../../app/student';
import { STUDENTS } from '../../../app/studentsMock';
>>>>>>> 688af1aec84dcc099727f234d8b955c37d6ada94
@Component({
  selector: 'app-stadistics',
  templateUrl: './stadistics.component.html',
  styleUrls: ['./stadistics.component.scss']
})
export class StadisticsComponent implements OnInit {

<<<<<<< HEAD
=======
  students = STUDENTS;
  selectedStudent: Student;


>>>>>>> 688af1aec84dcc099727f234d8b955c37d6ada94
  constructor() { }

  ngOnInit() {
  }

}
