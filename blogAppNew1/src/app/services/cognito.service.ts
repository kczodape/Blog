import { Injectable } from '@angular/core';
import { Amplify, Auth } from 'aws-amplify';
import { enviroment } from 'src/enviroments/enviroment';
import { IUser } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class CognitoService {
  constructor() {
    Amplify.configure({
      Auth: enviroment.cognito,
    });
  }

  signUp(user: IUser): Promise<any> {
    return Auth.signUp({
      username: user.email,
      password: user.password,
    });
  }

  getJwtToken(): Promise<string>{
    return Auth.currentSession().then((session) =>{
      return session.getIdToken().getJwtToken();
    })
  }

  confirmSignup(user: IUser): Promise<any> {
    return Auth.confirmSignUp(user.email, user.code);
  }

  signIn(user: IUser): Promise<any> {
    console.log(user);
    return Auth.signIn(user.email, user.password);
  }

  getUser():Promise<any>{
    return Auth.currentAuthenticatedUser();
  }

  updateUser(user:IUser):Promise<any>{
    return Auth.currentUserPoolUser().then((cognitoUser:any)=>{
      return Auth.updateUserAttributes(cognitoUser, user)
    })
  }

  signOut():Promise<any>{
    return Auth.signOut();
  }
}
