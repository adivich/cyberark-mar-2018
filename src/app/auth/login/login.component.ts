import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators, FormBuilder } from '@angular/forms';
import { passwordValidator } from '../../shared/validators/password.validator';
import {companyEmailValidator} from "../../shared/validators/company-email.validator";

@Component({
  selector: 'ca-login',
  template: `
    <form
      (submit)="login(loginForm)"
      [formGroup]="loginForm"
      [class.is-submitted]="isSubmitted">
      <ca-field label="email">
        <input
          formControlName="email"
          type="email"
          name="email"
          autofocus/>
      </ca-field>
      <ca-field-error *ngIf="isSubmitted" [control]="loginForm.controls['email']"></ca-field-error>
      <ca-field label="password">
        <input
          formControlName="password"
          type="password"
          name="password"/>
      </ca-field>
      <ca-field-error *ngIf="isSubmitted" [control]="loginForm.controls['password']"></ca-field-error>
      <button>Go</button>
      <button type="button" (click)="reset()">Reset</button>
    </form>
  `,
  styles: [
    `:host {
      margin: 100px auto;
      display: flex;
      justify-content: center;
    }`,
    `form {
      width: 300px;
      display: flex;
      flex-direction: column;
    }`,
    `.is-submitted input.ng-invalid {
      box-shadow: inset 0 0 1px 1px rgba(255,0,0,0.5);
    }`,
    `.field {
      display: flex;
      flex-direction: row;
      align-items: center;
    }`,
    `input {
      flex-grow: 1;
      padding: 7px;
      border-radius: 3px;
      box-shadow: inset 0 0 1px 1px rgba(0,0,0,0.5);
      border: none;
      outline: none;
    }`,
    `button {
      margin-top: 10px;
      padding: 7px;
      border-radius: 3px;
      min-width: 60px;
      margin-left: 5px;
    }`,
    `label {
      flex-basis: 80px;
      flex-shrink: 0;
      color: chocolate;
    }`,
    `.actions {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-self: flex-end;
    }`

  ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email, companyEmailValidator]],
      password: ['', [Validators.required, Validators.minLength(8), passwordValidator]]
    });
    // this.loginForm = new FormGroup({
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('', [Validators.required, Validators.minLength(8)])
    // });
  }
  ngOnInit() {
    this.loginForm.valueChanges.subscribe((value) => console.log('value', value));
    this.loginForm.statusChanges.subscribe((status) => console.log('status', status));
  }
  reset() {
    this.loginForm.setValue({
      email: '',
      password: ''
    });
    this.isSubmitted = false;
  }

  login() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

}
