import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StadisticsComponent } from './components/stadistics/stadistics.component';
import { ClassroomComponent } from './components/classroom/classroom.component';
import { RevisionComponent } from './components/revision/revision.component';
import { StudentComponent } from './components/student/student.component';


const routes: Routes = [
  {
    path: 'stadistics', component: StadisticsComponent
  },
  {
    path: 'classroom', component: ClassroomComponent
  },
  {
    path: 'revision', component: RevisionComponent
  },
  {
    path: 'student', component: StudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
