import { Router } from '@angular/router';
import { IUser } from './../../model/user';
import { Component } from '@angular/core';
import { CognitoService } from 'src/app/services/cognito.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  user: IUser = {} as IUser;

  constructor(private router: Router, private cognitoService: CognitoService) {
  }
  
  public signIn():void{
   this.cognitoService.signIn(this.user).then(()=>{
    // this.getUserData)=();
    this.getUserData();
    this.router.navigate(['/blog'])
   }).catch((error)=>{
    alert(error);
   })
  }

  private getUserData(): void {
    this.cognitoService.getUser().then((userData) => {
      // userData contains all user attributes, including custom ones
      console.log('User Data:', userData);
      // You can access specific attributes like this:
      console.log('Email:', userData.attributes.email);
      console.log('Name:', userData.attributes.name);
      // and any other custom attributes you defined in your User Pool
    }).catch((error) => {
      console.error('Error getting user data:', error);
    });
  }
  }

