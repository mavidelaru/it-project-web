import { AlumnoService } from 'src/app/services/alumno.service';
import { HttpClient } from 'selenium-webdriver/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login-components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ChartsComponent } from './components/global/charts/charts.component';
import { TablesComponent } from './components/global/tables/tables.component';
import { ReactiveFormsModule } from '@angular/forms';

// graficos
import { ChartsModule } from 'ng2-charts';

import { ResetPasswordRequestComponent } from './components/login-components/reset-password-request/reset-password-request.component';
import { RouterModule } from '@angular/router';
import { NewPasswordResetComponent } from './components/login-components/new-password-reset/new-password-reset.component';

import { StadisticsComponent } from './components/stadistics/stadistics.component';
import { ClassroomComponent } from './components/classroom/classroom.component';
import { RevisionComponent } from './components/revision/revision.component';
import { StudentComponent } from './components/student/student.component';
import { GenrepieComponent } from './components/stadistics/genrepie/genrepie.component';
import { PeoplepieComponent } from './components/stadistics/peoplepie/peoplepie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LayoutComponent } from './components/layout/layout.component';

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
    StudentComponent,
    GenrepieComponent,
    PeoplepieComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    ChartsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
