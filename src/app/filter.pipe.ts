import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, value: any): any[] {
    if (!items) { return []; }
    return items.filter(it => it.location === value);
  }

}
