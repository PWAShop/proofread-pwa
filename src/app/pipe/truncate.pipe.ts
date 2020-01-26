//https://stackoverflow.com/questions/44669340/how-to-truncate-text-in-angular2/46455994
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 25, completeWords = false, ellipsis = '...') {
    if (completeWords) {
      limit = value.substr(0, 13).lastIndexOf(' ');
    }
    return `${value.substr(0, limit)}${ellipsis}`;
  }
}