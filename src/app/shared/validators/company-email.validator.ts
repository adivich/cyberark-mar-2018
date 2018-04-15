import { ValidatorFn, FormControl } from '@angular/forms';

export const companyEmailValidator: ValidatorFn = (control: FormControl) => {
  let errors = {
  }

  const emailDomain = 'cyber-ark';

  if (!control.value.match(/^(\w+)\@(?:(?:(\w+)\.)?(\w+)\.)?(cyber\-ark)\.com$/)){
    errors['emailDomain'] = `email domain incorrect, expected: ${emailDomain}`;
  }
  return errors;
}
