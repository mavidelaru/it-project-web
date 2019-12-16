import { Component, OnInit } from '@angular/core';
import { Student } from '../../../app/student';
import { STUDENTS } from '../../../app/studentsMock';
@Component({
  selector: 'app-stadistics',
  templateUrl: './stadistics.component.html',
  styleUrls: ['./stadistics.component.scss']
})
export class StadisticsComponent implements OnInit {

  students = STUDENTS;
  selectedStudent: Student;


  constructor() { }

  ngOnInit() {
  }

}
