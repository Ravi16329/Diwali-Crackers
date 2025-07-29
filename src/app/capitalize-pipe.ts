import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {

  transform(value: unknown): string {
    if (typeof value !== 'string') return '';

    return value
      .split(' ')
      .map(word =>
        word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : ''
      )
      .join(' ');
  }
}
