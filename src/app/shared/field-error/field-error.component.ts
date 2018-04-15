import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

const ERRORS = {
  required: () => 'This field is required',
  email: () => 'This field is email',

  minlength: ({requiredLength}) => `Must be at list ${requiredLength} characters`,
  emailDomain: (errorMsg) => errorMsg,
  password: (errorMsg) => errorMsg,
  passwordDigits: () => 'Password must contain digits',
  passwordLowercase: () => 'Password must contain lowercase letters',
  passwordUppercase: () => 'Password must contain uppercase letters',
  passwordSpecialChars: () => 'Password must contain special characters'
};


@Component({
  selector: 'ca-field-error',
  template: `
    <div class="error">
      {{getErrorMsg()}}
    </div>
  `,
  styles: [`.error {
      font-size: 10px;
      color: red;
      margin-left: 80px;
      margin-bottom: 15px;
    }`]
})
export class FieldErrorComponent implements OnInit {
  @Input() control: FormControl;
  constructor() { }

  ngOnInit() {
  }

  getErrorMsg(){

    if (!this.control.errors){
      return;
    }
    const errorKey = Object.keys(this.control.errors)[0];
    const errorValue = this.control.errors[errorKey];

    return ERRORS[errorKey](errorValue);
  }

}
