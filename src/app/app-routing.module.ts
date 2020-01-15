
import { Routes, RouterModule } from '@angular/router';


import { ResetPasswordRequestComponent } from './components/login-components/reset-password-request/reset-password-request.component';
import { LoginComponent } from './components/login-components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LAYOUT_ROUTES } from './components/layout/layout.routing';


const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/reset-password', component: ResetPasswordRequestComponent },
  {
    path: 'layout',
    component: LayoutComponent,
    children: LAYOUT_ROUTES
  },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
