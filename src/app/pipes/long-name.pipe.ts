import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'longName'
})
export class LongNamePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    var x = value.split(" ");
    if (x.length > 1)
      return x[0] + " " + x[1][0] + ".";
    else
      return x;
  }

}
