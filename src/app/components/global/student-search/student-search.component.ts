import { Component, OnInit } from '@angular/core';
import { StudentSearch } from './model/student-search';
import { StudentSearchService } from '../../../services/student-search.service';
import { Select2OptionData } from 'ng-select2';
// import * as $ from 'jquery';


@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.scss']
})
export class StudentSearchComponent implements OnInit {



  constructor(private studentSearchService: StudentSearchService) { }

  students: StudentSearch[] = [];
  search = '';

  public exampleData: Array<Select2OptionData>;

  // searchQuery() {
  //   this.search = $('#search').select2().val();
  //   console.log(this.search);
  // }



  ngOnInit() {

    this.exampleData = [
      {
        id: 'basic1',
        text: 'Basic 1'
      },
      {
        id: 'basic2',
        disabled: true,
        text: 'Basic 2'
      },
      {
        id: 'basic3',
        text: 'Basic 3'
      },
      {
        id: 'basic4',
        text: 'Basic 4'
      }
    ];

    // TODO: segun el filtro de los radio buttons hacer la búsqueda del alumno

    // TODO: pasar datos
    // $('.js-example-basic-single').select2();
    // $(() => {
    //   $('#search').select2({ width: '20em' });
    // });

    // $('#search').select2().on('select2:select', function(e: any) {
    //   const selectedElement = $(e.currentTarget);
    //   const selectVal = selectedElement.val();
    //   this.search = selectVal;
    //   console.log(this.search);
    // });

    // this.students = this.studentSearchService.getStudentByName(this.search);


  }

}
