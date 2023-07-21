import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user';
import { CognitoService } from 'src/app/services/cognito.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: IUser = {} as IUser;

  ngOnInit(): void {
    this.cognitoService.getUser().then((user) => {
      this.user = user.attributes;
    });
  }

  constructor(private cognitoService: CognitoService) {}
  update(): void {
    this.cognitoService
      .updateUser(this.user)
      .then(() => {
        alert('Updated successfully');
      })
      .catch((error) => {
        alert(error);
      });
  }
}
