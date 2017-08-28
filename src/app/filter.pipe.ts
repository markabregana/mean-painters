import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(values: any, args: any): any {
  //   if ( !args ) {
  //     console.log(args);
  //   } else {
  //     return values.filter(value => value.id === args);
  //   }
  // }

  transform(items: any, value: any): any[] {
    if (!items) { return []; }
    console.log(items);
    return items.filter(it => it.id === value);
  }

}
