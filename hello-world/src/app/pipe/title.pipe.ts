import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "titlepipe"
})
export class TitlePipe implements PipeTransform {

    transform(value: string) {
        if(!value) 
            return null;
        let val = value.split(' ');

        for(let i = 0; i < val.length; i++) {
            
            let existPreposition = this.prepositions(val[i].toLowerCase());
            if(i > 0 && existPreposition) {
                val[i] = val[i].toLowerCase();
            }
            else {
                val[i] = this.titleCaseConvert(val[i]);
            }
        }
        return val.join(' ');
    }

    private titleCaseConvert(p: string) {
        return p.substr(0, 1).toUpperCase() + "" + p.substr(1).toLowerCase();
    }

    private prepositions(val: string): any {
        let prepositions = [
            'of',
            'the'
        ];
        return prepositions.includes(val);
    }
}