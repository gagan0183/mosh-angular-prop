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

    static shouldBeunique(control: AbstractControl) : Promise<ValidationErrors> | null {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(control.value);
                if(control.value == 'gagan')
                    resolve({ shouldBeunique: true });
                else 
                    resolve(null);
            }, 2000);    
        });
    }
}