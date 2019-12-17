import { Component, OnInit } from '@angular/core';
import { StudentSearch } from './model/student-search';
import { StudentSearchService } from '../../../services/student-search.service';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.scss']
})
export class StudentSearchComponent implements OnInit {

  constructor(private studentSearchService: StudentSearchService) { }
  
  students: StudentSearch[];
  search = <HTMLInputElement>document.querySelector(".dropdown-menu");
  
  ngOnInit() {
    
    console.log(this.search);
    this.students = this.studentSearchService.getStudentByName("TODO: pasar datos");

  }

}
