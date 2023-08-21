import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-pg',
  templateUrl: './calendar-pg.component.html',
  styleUrls: ['./calendar-pg.component.css']
})
export class CalendarPgComponent {
  holidayDates:any[] = [new Date('2023-08-25'), new Date('2023-08-30')]
}
