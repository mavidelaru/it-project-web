import { Component, OnInit, Input } from '@angular/core';
import { StudentSeatService, StudentSeat } from '../../services/student-seat.service';

@Component({
  selector: 'app-classroom-view',
  templateUrl: './classroom-view.component.html',
  styleUrls: ['./classroom-view.component.scss']
})
export class ClassroomViewComponent implements OnInit {

  students: StudentSeat[] = [];
  selectedStudent: StudentSeat;

  constructor( private _studentsService: StudentSeatService ) {
  }

  ngOnInit() {
    this.students = this._studentsService.getStudentSeat();
    console.log(this.students);
    
    this.orderStudentsPosition();
  }


  selectStudent(student: StudentSeat) {
    this.selectedStudent = student;
    console.log(student);
  }

  studentPopup(student: StudentSeat) {
    this.selectedStudent = student;
    console.log(`Position: ${student.position}`);
  }

// reordena los datos por el valor de la posición
  orderStudentsPosition() {
    let orderedList = this.students.sort( (a,b) => {
     if (a.position > b.position) {
       return 1;
     } else {
       return -1;
     }
    });
    console.log(orderedList);
    return orderedList;
  }

}
