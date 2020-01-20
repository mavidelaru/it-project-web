import { Component, OnInit } from '@angular/core';
import { StudentSearchService } from '../../../services/student-search.service';


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


  constructor(private stu: StudentSearchService) { }

  ngOnInit() {
    this.remainingHoursWeek();
  }

  remainingHoursWeek() {
    console.log(this.today.getDay());
    console.log(this.stu.idStudent);
  }


}
