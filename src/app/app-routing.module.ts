import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StadisticsComponent } from './components/stadistics/stadistics.component';
import { ClassroomComponent } from './components/classroom-view/classroom-view.component';
import { RevisionComponent } from './components/revision/revision.component';
import { StudentComponent } from './components/student/student.component';

import { ResetPasswordRequestComponent } from './components/reset-password-request/reset-password-request.component';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';


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
  },
  {
    path: 'reset-password', component: ResetPasswordRequestComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
