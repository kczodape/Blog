import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, Hub } from 'aws-amplify';
import { IUser } from 'src/app/model/user';
import { BlogService } from 'src/app/services/blog.service';
import { CognitoService } from 'src/app/services/cognito.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  user: IUser = {} as IUser;
  blogs: any[] = [];
  isAuthenticated: boolean = false;

  constructor(private blogService: BlogService, private cognitoService: CognitoService, private router:Router) {}

  ngOnInit() {
    this.fetchBlogs();

    Hub.listen('auth', ({payload}) => {
      if(payload.event === 'signIn'){
        this.isAuthenticated = true;
      }else if(payload.event === 'signOut'){
        this.isAuthenticated = false
      }
    })
    this.cognitoService.getUser().then((user)=>{
      this.user = user.attributes;
      this.isAuthenticated = user?.signInUserSession?.isValid() || false;
    })
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

  update():void{
    this.cognitoService.updateUser(this.user).then(()=>{
      alert("Updated successfully")
    }).catch((error)=>{
      alert(error)
    })
  }

  public signOut():void{
    this.cognitoService.signOut().then(()=>{
      this.router.navigate(['/sign-in'])
    }).catch((error)=>{
      alert(error);
    })
  }
}
