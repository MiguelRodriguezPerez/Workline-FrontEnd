import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'falsyValuePipe',
})
export class FalsyValuePipe implements PipeTransform {

  transform(value: string | number): string | number | null {
    return !value ? null: value;
  }

}
