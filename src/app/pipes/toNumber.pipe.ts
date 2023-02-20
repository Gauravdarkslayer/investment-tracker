import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    // tslint:disable-next-line:pipe-naming
    name: 'toNumber',
    pure: false
}) export class ToNumberPipe implements PipeTransform {
    public transform(items: any,precision:number): any {
        if (!items) {
            return 0;
        }
        return items.toFixed(precision);
    }
}