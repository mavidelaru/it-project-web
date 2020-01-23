

import { Component, OnInit, TemplateRef } from '@angular/core';
import { StudentSeatService, StudentSeat } from '../../services/student-seat.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-classroom-view',
  templateUrl: './classroom-view.component.html',
  styleUrls: ['./classroom-view.component.scss']
})
export class ClassroomViewComponent implements OnInit {

  students: StudentSeat[] = [];
  selectedStudent: StudentSeat;

  modalRef: BsModalRef; // modal

  constructor( private _studentsService: StudentSeatService,
               private modalService: BsModalService // modal
    ) {
  }

  ngOnInit() {
    this.students = this._studentsService.getStudentSeat();

    this.orderStudentsPosition();
  }



  studentPopup(student: StudentSeat) {
    this.selectedStudent = student;
    console.log(`Position: ${student.position}`);
  }

// método temporal para visualizar student por consola
  selectStudent(student: StudentSeat) {
    this.selectedStudent = student;
    console.log(student);
    return student;

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

  // muestra el modal si hay contenido
  openModal(template: TemplateRef<any>) {
    if(this.selectedStudent.name == '') {
      console.log('No student to show');
    } else {
      this.modalRef = this.modalService.show(template);
    }
  }

  // funciones dentro del modal
  confirm(){ };
  decline(){ };


}



