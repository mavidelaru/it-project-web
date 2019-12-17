import { Component } from '@angular/core';

import listadeAlumnos from 'src/assets/json/alumnos.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'itdashboard';
  Alumnos: any = listadeAlumnos;
}
