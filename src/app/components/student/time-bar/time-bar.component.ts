import { Component, OnInit } from '@angular/core';
import { StudentSearchService } from '../../../services/student-search.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-time-bar',
  templateUrl: './time-bar.component.html',
  styleUrls: ['./time-bar.component.scss']
})
export class TimeBarComponent implements OnInit {

  percentage = '0%';

  day = 5; // in hours
  week = 5; // in days without free days
  totalHours = 400; // in hours

  today = new Date();
  deadLine: number;


  constructor(private stu: StudentSearchService,
              private aRoute: ActivatedRoute) { }

  ngOnInit() {
    this.remainingHoursWeek();
  }

  remainingHoursWeek() {
    console.log(this.today.getDay());
    this.aRoute.params.subscribe( params => {
      // console.log(Object.keys(params).length);
      if (Object.keys(params).length > 0) { 
        const result = this.stu.filterNames(params.id, 0);
        
        // TODO: obtener fecha final del array studentsample si coincide con el resultado de la búsqueda
        for (const student of this.stu.StudentSample) {
          if (student.name == result[0].FirstName && student.lastname == result[0].LastName){
            console.log(student.limitDate);
          }
        }
      }
    });
  }


}
