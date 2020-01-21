import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
selector: 'app-exercise-modal',
templateUrl: './exercise-modal.component.html',
styleUrls: ['./exercise-modal.component.scss']
})
export class ExerciseModalComponent implements OnInit {
modalRef: BsModalRef;
public dpConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();

//dateForm: FormGroup;
//submitted = false;

constructor(private modalService: BsModalService,
private formBuilder: FormBuilder) {
this.dpConfig.containerClass = 'theme-default';
}

ngOnInit() {
// this.dateForm = this.formBuilder.group({

// date: ['', [Validators.required, Validators.pattern('/^[0-9]{1,2}([,.][0-9]{0,2})?$/')]]
// });
}
// get f() {
// return this.dateForm.controls;
// }
// onSubmit() {
// this.submitted = true;
// // stop there if form is invalid
// if (this.dateForm.invalid) {
// return;
// }
// // SUCCESS
// alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dateForm.value));
// }

openModal(template: TemplateRef<any>) {
this.modalRef = this.modalService.show(template);
}

changeDate(date: any) {
console.log(date);

}
}