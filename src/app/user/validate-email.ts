import { AbstractControl, ValidatorFn } from "@angular/forms";

export function validateEmail(): ValidatorFn {
  return (c: AbstractControl): {[key: string]: any} => {
    let REG_EXP =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i;
    console.log(REG_EXP.test(c.value));
    return (REG_EXP.test(c.value) ? null : { pattern: false });
  };
}
