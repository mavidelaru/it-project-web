import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Alumne } from 'src/app/alumne';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent {

  public alumnes: Alumne[] = [
    { student: 'pepe', itinerary: 'Front' },
    { student: 'maria', itinerary: 'Back' },
  ];

  selectedStudent: Alumne;

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  selectStudent(student: Alumne) {
    this.selectedStudent = student;
  }

  confirm() {}
  decline() {}
}
