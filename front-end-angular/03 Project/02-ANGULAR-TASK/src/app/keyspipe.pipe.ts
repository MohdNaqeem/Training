import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'key'
})
export class KeyspipePipe implements PipeTransform {

  transform(value: any): string[] {
    return Object.keys(value);
  }

}
