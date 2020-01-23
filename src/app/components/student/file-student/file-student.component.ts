


 // import { StudentSearchService } from './../../../services/student-search.service';
 // import { StudentSearchComponent } from './../../global/student-search/student-search.component';
 import { Component, OnInit } from '@angular/core';
 import { Alumno } from './../../global/tables/model/alumno';
 import listadeAlumnos from 'src/assets/json/alumnos.json';
 import { StudentSearchService } from '../../../services/student-search.service';
 import { FilestudentService } from '../file-student/file-student.service';


 @Component({
  selector: 'app-file-student',
  templateUrl: './file-student.component.html',
  styleUrls: ['./file-student.component.scss']
 })

 export class FileStudentComponent implements OnInit {

  Alumnos: any = listadeAlumnos;
  estudiantes: Alumno[] = [];
  selectedStudent:string = "";
  StudentSearchService: any;
  student:any;

  getStudent() {

    for ( let i = 0; i < this.Alumnos.length ; i++) {

      if (this.selectedStudent == this.Alumnos[i].name) {
        console.log( 'Find' );
        this.student = this.Alumnos[i];
      }
    }
    console.log(this.student);
  };

  changeItinerary(value:any) {
    this.student.itinerary = value;

  }

  constructor() { }

  ngOnInit() {
  }

}
