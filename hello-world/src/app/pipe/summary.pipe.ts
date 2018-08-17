import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?: number) {
        if(!value) 
            return null;
        var actualLimit = limit ? limit : 90;
        return value.substring(0, limit);
    }
}