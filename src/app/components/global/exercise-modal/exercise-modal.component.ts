import { Component, TemplateRef, OnInit, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExerciseService } from '../../../services/exercise.service';
import { Exercise } from '../tables/model/exercise';
@Component({
  selector: 'app-exercise-modal',
  templateUrl: './exercise-modal.component.html',
  styleUrls: ['./exercise-modal.component.scss']
})
export class ExerciseModalComponent implements OnInit {
  @Input('data') exercise: Exercise;

  modalRef: BsModalRef;
  public dpConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();
  exercises: Exercise[] = [];

  //dateForm: FormGroup;
  //submitted = false;

  constructor(private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private service: ExerciseService) {
    this.dpConfig.containerClass = 'theme-default';
    // this.dpConfig.dateInputFormat = 'DD/MM/YYYY';
  }

  ngOnInit() {
    // this.dateForm = this.formBuilder.group({
    //   date: ['', Validators.required, Validators.pattern('^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/\-]\d{4}$')]

    // });
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalService._hideModal(1);
  }

  changeCorrected(date) {
    this.exercise = this.service.getExercise(this.exercise.id);
    if (this.exercise.state != "Corregido") {
      this.exercise.state = "Corregido";
      this.changeDate(date);
      this.closeModal();
      console.log("estado cambiado");
    } else {
      console.log("ya está corregido");
      this.closeModal();
    }

  }

  changeReviewed(date) {
    this.exercise = this.service.getExercise(this.exercise.id);
    this.exercise.state = "A revisar";
    this.changeDate(date);
    this.closeModal();
  }

  changeDone(date) {
    this.exercise = this.service.getExercise(this.exercise.id);
    this.exercise.state = "Entregado";
    this.changeDate(date);
    this.closeModal();
  }

  changeDate(date: any) {
    this.exercise = this.service.getExercise(this.exercise.id);
    this.exercise.date = new Date(date);
    console.log(date);

  }
}