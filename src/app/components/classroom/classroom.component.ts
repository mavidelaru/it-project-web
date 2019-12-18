import { Component, OnInit } from '@angular/core';
import { studentSeatService, StudentSeat } from '../../services/student-seat.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {

  studentSeats: StudentSeat[] = [];

  constructor( private _studentSeatService: studentSeatService ) {
    console.log("constructor");
  }

  ngOnInit() {
    // iniciate service
    this.studentSeats = this._studentSeatService.getStudentSeat();
    console.log(this.studentSeats);
  }
  // click function: show popup with info
  studentPopUp() {
    console.log('popup works!');
  }
  // mouseover function: show student name
  showStudentName() {
    console.log('show student name');
  }

}
