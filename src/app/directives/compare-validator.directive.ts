import { Directive, Input } from '@angular/core';
import { FormGroup, NG_VALIDATORS, Validator } from '@angular/forms';
import { CompareValidator } from "../utils/validators"

@Directive({
  selector: '[compare]',
  providers: [{
    provide: NG_VALIDATORS,
    useClass: CompareValidatorDirective,
    multi: true
  }]
})
export class CompareValidatorDirective implements Validator {

  @Input("compare") controls = ["password", "confirmPassword"];
  

  constructor() { }

  validate(form : FormGroup)
    {
        console.log(this.controls, form)

        return CompareValidator(this.controls[0], this.controls[1])(form);
        // return validatorInstance(form);
        //return null
    }

}
