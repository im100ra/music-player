import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replcaeEmptyString',
  standalone: true,
})
export class replcaeEmptyString implements PipeTransform {
  transform(value: any, replceString: string) {
    if (typeof value === 'string') {
            return value != '' ? value : replceString
    } else{
        return value
    }
  }
}
