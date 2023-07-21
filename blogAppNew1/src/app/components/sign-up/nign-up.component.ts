import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from './../../model/user';
import { CognitoService } from 'src/app/services/cognito.service';

@Component({
  selector: 'app-nign-up',
  templateUrl: './nign-up.component.html',
  styleUrls: ['./nign-up.component.scss']
})
export class NignUpComponent {
  isConfirm: Boolean = false;
  user:IUser = {} as IUser;

  constructor(private router: Router, private cognitoService:CognitoService){}

  public signUp():void{
    this.cognitoService.signUp(this.user).then(()=>{
      this.isConfirm = true;
    }).catch((error)=>{
      alert(error);
    })
  }

  public confirmSignUp():void{
    this.cognitoService.confirmSignup(this.user).then(()=>{
      this.router.navigate(['/sign-in'])
    }).catch((error)=>{
      alert(error)
    })
  }
}
