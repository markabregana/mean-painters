import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, term: any, value: any): any[] {
    if (!items) { return []; }
    // console.log(term + ' - ' + value);
    return items.filter(it => it[term] === value);
  }

}
