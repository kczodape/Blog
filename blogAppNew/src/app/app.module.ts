import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './component/blog/blog.component';
import { OpenEditorComponent } from './component/open-editor/open-editor.component';
import { LandingComponent } from './component/landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TinymceEditorComponent } from './component/tinymce-editor/tinymce-editor.component';
import { HttpClientModule } from '@angular/common/http';
import {EditorModule} from '@tinymce/tinymce-angular'

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    OpenEditorComponent,
    LandingComponent,
    TinymceEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
