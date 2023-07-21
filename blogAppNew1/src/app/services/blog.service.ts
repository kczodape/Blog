import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  // private apiUrl = 'https://kbtqa686ik.execute-api.us-east-1.amazonaws.com/blog/blog';
  private apiUrl = 'http://localhost:3000/blogs';

  constructor(private http: HttpClient) {}

  createBlogPost(blogData: any) {
    return this.http.post(this.apiUrl, blogData);
  }

  getBlogs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
