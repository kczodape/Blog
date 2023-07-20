import { Component, AfterViewInit } from '@angular/core';
import tinymce from 'tinymce/tinymce';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-tinymce-editor',
  templateUrl: './tinymce-editor.component.html',
  styleUrls: ['./tinymce-editor.component.scss']
})
export class TinymceEditorComponent implements AfterViewInit {
  constructor(private postService: PostService) {}

  key = "w4c6s7ywm35s2htp0hs6dln2871fipgg2njmx7av3atctdli"
  
  ngAfterViewInit() {
    tinymce.init({
      selector: '#my-tinymce-editor',
      plugins: 'link',
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
