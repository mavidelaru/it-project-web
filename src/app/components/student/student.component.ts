import { Component, OnInit } from '@angular/core';
import { StudentSearchService } from 'src/app/services/student-search.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private search: StudentSearchService) {
    search.page = 'student';
  }

  ngOnInit() {
  }

}
