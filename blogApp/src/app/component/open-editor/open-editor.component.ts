import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-open-editor',
  templateUrl: './open-editor.component.html',
  styleUrls: ['./open-editor.component.scss']
})
export class OpenEditorComponent {

  constructor(public dialogRef: MatDialogRef<BlogComponent>) {}

}
