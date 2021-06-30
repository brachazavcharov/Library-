import { Pipe, PipeTransform } from '@angular/core';
import { BookDetails } from '../classes/book-details';
import { BookListComponent } from '../book-list/book-list.component';
import { stringify } from 'querystring';

@Pipe({
  name: 'presentBook'
})
export class PresentBookPipe implements PipeTransform {

  transform(value: BookDetails[], ...args: any[]): void {
  //   let j: number = 0;
  //   let arr: BookDetails[] = []
  //   if (value != null && args != null) {
  //   for (let i = 0; i < value.length; i++) {
  //       if (value[i].title.includes[args[0]])
  //         arr[j++] = value[i];
  //     }
  //      return arr;
  //   }
  //  else
  //  return value;
  }
}
