import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginData} from '../../shared/loginData';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  loginData: LoginData;
  loginForm: FormGroup;

  constructor(public ActiveModal: NgbActiveModal, private FromBuilder: FormBuilder) {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = this.FromBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
