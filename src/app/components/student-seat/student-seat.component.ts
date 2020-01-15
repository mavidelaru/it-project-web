import { Component, OnInit } from '@angular/core';
import { studentSeatService, StudentSeat } from '../../services/student-seat.service';

@Component({
  selector: 'app-student-seat',
  templateUrl: './student-seat.component.html',
  styleUrls: ['./student-seat.component.scss']
})
export class StudentSeatComponent implements OnInit {

  studentSeats: StudentSeat[] = [];

  constructor( private _studentSeatService: studentSeatService ) {
   }

  ngOnInit() {
        // iniciate service
        this.studentSeats = this._studentSeatService.getStudentSeat();
        // console.log(this.studentSeats);
  }
  // click function: show popup with info
  studentPopUp() {
    console.log('popup works!');
  }
  // mouseover function: show student name
  showStudentName() {
    // console.log('show student name');
  }
}
