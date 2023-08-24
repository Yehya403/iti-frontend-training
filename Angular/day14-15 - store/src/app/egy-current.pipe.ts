import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egyCurrent'
})
export class EgyCurrentPipe implements PipeTransform {

  transform(value: number | string): string {
    return `${value} EGP`;
  }

}
