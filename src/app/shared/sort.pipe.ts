import { Pipe, PipeTransform } from '@angular/core';
import { sortBy, reverse } from 'lodash';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>, direction = 'ASC'): any {
    const sorted = sortBy(value);

    return direction === 'ASC' ? sorted : reverse(sorted);
  }

}
