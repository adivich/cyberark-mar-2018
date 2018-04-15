import { ValidatorFn, FormControl } from '@angular/forms';

export const passwordValidator: ValidatorFn = (control: FormControl) => {
  const errors = {};

  if (!control.value.match(/[0-9]+/g)) {
    errors['passwordDigits'] = true;
  }
  if (!control.value.match(/[a-z]+/g)) {
    errors['passwordLowercase'] = true;
  }
  if (!control.value.match(/[A-Z]+/g)) {
    errors['passwordUppercase'] = true;
  }
  if (control.value.match(/^[a-zA-Z0-9]+$/g)) {
    errors['passwordSpecialChars'] = true;
  }

  return errors;
}
