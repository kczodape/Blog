import { Component, AfterViewInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import tinymce from 'tinymce/tinymce';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-open-editor',
  templateUrl: './open-editor.component.html',
  styleUrls: ['./open-editor.component.scss']
})
export class OpenEditorComponent implements AfterViewInit {
  key = "w4c6s7ywm35s2htp0hs6dln2871fipgg2njmx7av3atctdli"

  constructor(
    public dialogRef: MatDialogRef<OpenEditorComponent>,
    private postService: PostService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  

  ngAfterViewInit() {
    tinymce.init({
      selector: '#my-tinymce-editor',
      plugins: 'code',
      toolbar: 'undo redo | bold italic | code',
      height: 500
    });
  }

  onSubmit() {
    const editor = tinymce.get('my-tinymce-editor');

    if (editor) {
      const content = editor.getContent();
      const postData = { content: content };

      this.postService.createPost(postData).subscribe((response) => {
        console.log('Post created:', response);
      });
    }
  }
}
