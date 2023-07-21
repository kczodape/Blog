import { Component } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  editorContent: string = ''; // Variable to store the content of the editor
  title: string = '';
  description: string = '';
  tags: string = '';
  imageUrl: string = '';
  blogForm: FormGroup | any;
  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private router: Router
  ) {
    this.blogForm = this.fb.group({
      editorContent: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      tags: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  handleSubmit() {
    // Create an object with the blog post data
    const postData = {
      content: this.editorContent,
      description: this.description,
      image_url: this.imageUrl,
      private: false,
      public: true,
      tags: this.tags.split(',').map(tag => tag.trim()),
      title: this.title,
      username: 'Kavya', // Assuming you want to hardcode the username
      user_id: '14d8e4f8-7001-7028-5bc5-d87faca695ad'
    };

    // Send the blog post data to the JSON server using BlogService
    this.blogService.createBlogPost(postData).subscribe(response => {
      // Handle the response from the server (optional)
      console.log('Post response:', response);
      // Clear the form fields
      this.blogForm.reset();

      // Redirect to the blog component
      this.router.navigate(['/blog']);
      alert("Blog created success fully")
    });
  }
}
