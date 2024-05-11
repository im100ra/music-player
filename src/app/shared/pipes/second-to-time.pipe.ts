import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondToTime',
  standalone: true,
})
export class secondToTime implements PipeTransform {
  transform(value: any, ...args: unknown[]) {
    if (typeof value === 'string') {
      value = parseInt(value);
    }
    let seconds = value % 60;
    let mintues = Math.floor((value / 60) % 60);
    value = value - mintues * 60 - seconds;
    let hours = Math.floor(value / 3600);

    return `${
      hours > 0 ? (hours >= 10 ? hours : '0' + hours) + ':' : ''
    }${mintues}:${seconds >= 10 ? seconds : '0' + seconds}`;
  }
}
