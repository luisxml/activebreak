import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { FormatString } from 'src/app/shared/util';
import { environment } from 'src/environments/environment';
import { LogoutType } from 'src/app/shared/constant';
import { ResponseLabel } from 'src/app/shared/models/general/label.interface';
import { general, sessionLogin } from 'src/assets/label.json';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logoutType = LogoutType;
  labelJson: ResponseLabel = new ResponseLabel();

  constructor(
    public router: Router
  ) { }

  urlLogin = FormatString(
    environment.userActiveDirectory,
    environment.cognitoDomain,
    environment.identityProviderAzure,
    environment.clientUrl,
    environment.clientIdAzure
  );

  ngOnInit(): void {
    init_plugins();
   
    this.labelJson.general = general;
    this.labelJson.login = sessionLogin;
  }

  beginSession(typeSession: number, session: string) {
    // window.location.replace(session);
    this.router.navigate(['/inicio']);
  }

}
