import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpenEditorComponent } from '../open-editor/open-editor.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(OpenEditorComponent, {
      width: '600px', // Adjust the width as needed
      data: { enterAnimationDuration, exitAnimationDuration },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed:', result);
    });
  }
}
