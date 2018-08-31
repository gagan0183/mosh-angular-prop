import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0) {
            return {
                cannotContainSpace: true
            }
        }
        return null;
    }

    static shouldBeunique(control: AbstractControl) : ValidationErrors | null {
        setTimeout(() => {
            if(control.value === 'gagan')
                return  {
                    shouldBeunique: true
                }
            return null;
        });
        return null;
    }
}