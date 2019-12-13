import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ChartsComponent } from './components/global/charts/charts.component';
import { TablesComponent } from './components/global/tables/tables.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ResetPasswordRequestComponent } from './components/reset-password-request/reset-password-request.component';
import { RouterModule } from '@angular/router';
import { NewPasswordResetComponent } from './components/new-password-reset/new-password-reset.component';

import { StadisticsComponent } from './components/stadistics/stadistics.component';
import { ClassroomComponent } from './components/classroom/classroom.component';
import { RevisionComponent } from './components/revision/revision.component';
import { StudentComponent } from './components/student/student.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ChartsComponent,
    TablesComponent,

    ResetPasswordRequestComponent,
    NewPasswordResetComponent,

    StadisticsComponent,
    ClassroomComponent,
    RevisionComponent,
    StudentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
