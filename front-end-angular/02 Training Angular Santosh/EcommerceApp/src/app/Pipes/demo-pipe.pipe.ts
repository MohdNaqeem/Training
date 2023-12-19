import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demoPipe'
})
export class DemoPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(!length){
      length = 100
    }
    return value.substring(0, length)
  }

}
