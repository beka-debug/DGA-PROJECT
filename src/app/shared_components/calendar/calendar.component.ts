import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  @Input() holidayDates!:any[];
  constructor(private dateAdapter: DateAdapter<Date>) { }
  dateFilter = (date: Date) => {
    const currentMonth = this.dateAdapter.getMonth(new Date());
    return this.dateAdapter.getMonth(date) === currentMonth;
  };

  dateClass = (date: Date) => {
    const isHoliday = this.holidayDates.some(holidayDate =>
      this.areDatesEqual(holidayDate, date)
    );
    console.log(isHoliday ? 'custom-holiday' : '')

    return isHoliday ? 'custom-holiday' : '';

  };
  areDatesEqual(date1: Date, date2: Date): boolean {
    const date1WithoutTime = new Date(date1);
    const date2WithoutTime = new Date(date2);

    date1WithoutTime.setHours(0, 0, 0, 0);
    date2WithoutTime.setHours(0, 0, 0, 0);

    console.log('Comparing:', date1WithoutTime.getTime() == date2WithoutTime.getTime());

    return date1WithoutTime.getTime() === date2WithoutTime.getTime();
  }
}
