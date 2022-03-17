import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'refBook'
})
export class RefBookPipe implements PipeTransform {

  transform(value: number): string {

    let result: string
    result = "Ref: " + value
    return result;
  }

}
