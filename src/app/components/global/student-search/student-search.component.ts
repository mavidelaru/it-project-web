import { Component, OnInit } from '@angular/core';
import { StudentSearch } from './model/student-search';
import { StudentSearchService } from '../../../services/student-search.service';
import { Select2OptionData } from 'ng2-select2';



@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.scss']
})
export class StudentSearchComponent implements OnInit {


  students: StudentSearch [] = [];
  studentNames: string [] = [];
  nameList: Select2OptionData [] = [];
  search = '';

  optionsSelect: Select2Options; // for options of the select2

  constructor(private studentSearchService: StudentSearchService) {
    this.students = this.studentSearchService.getStudentByName(this.search);
    let i = 0; // index
    for (const student of this.students) {
      this.studentNames.push(this.studentSearchService.fullName(student.FirstName, student.LastName));
      this.nameList.push({id: student.Id, text: this.studentNames[i]});
      i++;
    }
    // console.log(this.nameList);
  }

  // TODO: devolver el valor del select para mostrar el alumno seleccionado
  searchQuery(q: any) {
    this.search = q.data[0].text;
  }

  onSubmit() {    
    console.log(this.search);
  }

  ngOnInit() {

    // matcher return only the coincidence term that starts from the beginning of the word only
    this.optionsSelect = {
      theme: 'bootstrap',
      placeholder: 'Buscar Alumno...',
      allowClear: true,
      width: '100%',
      // matcher: (term: string, text: string) => {
      //   return text.toUpperCase().indexOf(term.toUpperCase()) === 0;
      // }
    };

  }


  // TODO: segun el filtro de los radio buttons hacer la búsqueda del alumno

  // TODO: pasar datos



}
