import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './components/create/create.component';
import { LandingComponent } from './components/landing/landing.component';
import { NignUpComponent } from './components/sign-up/nign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './components/profile/profile.component'; // Import the AuthGuard


@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    CreateComponent,
    LandingComponent,
    NignUpComponent,
    SignInComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
