import { Injectable } from '@angular/core';
import { StudentSearch } from '../components/global/student-search/model/student-search';

const STUDENT_SEARCH_SAMPLE: StudentSearch[] = [
  new StudentSearch("a1", "nombre1", "apellido1"),
  new StudentSearch("a2", "nombre2", "apellido2"),
  new StudentSearch("a3", "nombre3", "apellido3"),
  new StudentSearch("a4", "nombre4", "apellido4")
];



@Injectable({
  providedIn: 'root'
})
export class StudentSearchService {

  // constructor() { }

  getStudentByName(filter:string): StudentSearch[]{
    return STUDENT_SEARCH_SAMPLE.filter(name => name.FirstName == filter);
  }

  getStudentBySurname(filter:string): StudentSearch[]{
    return STUDENT_SEARCH_SAMPLE.filter(surname => surname.Lastname == filter);
  }

}
