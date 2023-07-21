import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CreateComponent } from './components/create/create.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {path:'', component:LandingComponent},
  {path:'blog', component:BlogsComponent},
  {path:'create', component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
