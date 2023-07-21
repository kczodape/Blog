import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl =
    'https://kbtqa686ik.execute-api.us-east-1.amazonaws.com/blog/blog';
  // private apiUrl = 'http://localhost:3000/blogs';

  constructor(private http: HttpClient) {}

  createBlogPost(blogData: any, jwtToken: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwtToken}`,
    });
    return this.http.post(this.apiUrl, blogData, { headers });
  }

  getBlogs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteBlog(blogId: string, jwtToken: string): Observable<any> {
    const url = `${this.apiUrl}/${blogId}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwtToken}`,
    });
    return this.http.delete(url, { headers });
  }

  
}
