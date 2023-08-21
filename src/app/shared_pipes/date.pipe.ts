import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateconv'
})
export class DatePipe implements PipeTransform {
  transform(value: any): any {
    if (typeof value === 'string') {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        const formattedDate = date.toLocaleString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
        return formattedDate;
      }
    }
    return value;
  }
}
