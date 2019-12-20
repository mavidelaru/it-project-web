import { Component, OnInit } from '@angular/core';
import { StudentSearch } from './model/student-search';
import { StudentSearchService } from '../../../services/student-search.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.scss']
})
export class StudentSearchComponent implements OnInit {

  

  constructor(private studentSearchService: StudentSearchService) { }
  
  students: StudentSearch[] = [];
  search: string = "";
  
  searchQuery(){
    this.search = $("#search").select2().val();    
    console.log(this.search);
  }
  
  ngOnInit() {
    //TODO: segun el filtro de los radio buttons hacer la búsqueda del alumno
    
    // TODO: pasar datos
    $('.js-example-basic-single').select2();
    $(document).ready(function() { 
      $("#search").select2({ width: '20em' });           
    }); 

    $("#search").select2().on("select2:select", function (e: any) {
      var selected_element = $(e.currentTarget);
      var select_val = selected_element.val();
      this.search = select_val;
      console.log(this.search);
    });
    
    this.students = this.studentSearchService.getStudentByName(this.search);
    
    
  }

}
