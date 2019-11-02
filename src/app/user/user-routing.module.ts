import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
      path: '',
      data: {
          title: 'User'
      },
      children: [
          {
              path: 'login',
              component:LoginComponent,
              data: {
                  title: 'Login',
              }
          },
          {
              path: 'register',
              component: RegisterComponent,
              data: {
                  title: 'Register',
              }
          },
      ]
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
