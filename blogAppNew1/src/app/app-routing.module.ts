import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CreateComponent } from './components/create/create.component';
import { LandingComponent } from './components/landing/landing.component';
import { NignUpComponent } from './components/sign-up/nign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthGuard } from './auth.guard'; // Import the AuthGuard

const routes: Routes = [
  {path:'', component:LandingComponent},
  {path:'blog', component:BlogsComponent},
  {path:'create', component:CreateComponent, canActivate: [AuthGuard]},
  {path:'sign-up', component:NignUpComponent},
  {path:'sign-in', component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
