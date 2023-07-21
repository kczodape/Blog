import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  blogs: any[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.fetchBlogs();
  }

  fetchBlogs() {
    this.blogService.getBlogs().subscribe(
      (response) => {
        this.blogs = response;
      },

      (error) => {
        console.error('Error fetching blogs:', error);
      }
    );
  }
}
