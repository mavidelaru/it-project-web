import { Routes, RouterModule } from '@angular/router';
import { StadisticsComponent } from '../stadistics/stadistics.component';
import { StudentComponent } from '../student/student.component';
import { ClassroomComponent } from '../classroom/classroom.component';
import { RevisionComponent } from '../revision/revision.component';




export const LAYOUT_ROUTES: Routes = [
  { path: 'stadistics', component: StadisticsComponent },
  { path: 'student', component: StudentComponent },
  { path: 'student/:id', component: StudentComponent },
  { path: 'classroom', component: ClassroomComponent },  
  { path: 'revision', component: RevisionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];


