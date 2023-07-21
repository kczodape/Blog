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
    this.router.navigate(['/blog'])
   }).catch((error)=>{
    alert(error);
   })
  }
}
