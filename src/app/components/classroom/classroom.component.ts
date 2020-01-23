import { Component, OnInit } from '@angular/core';
import { StudentSearchService } from 'src/app/services/student-search.service';


@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})

export class ClassroomComponent implements OnInit {


  constructor(private search: StudentSearchService) {
    search.page = 'classroom';
  }

  ngOnInit() {

  }

}
