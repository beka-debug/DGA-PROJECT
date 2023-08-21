import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparisonComponent } from './views/comparison/comparison.component';
import { TimeConverterComponent } from './views/time-converter/time-converter.component';
import { CalendarPgComponent } from './views/calendar-pg/calendar-pg.component';

const routes: Routes = [
  { path: "", component: CalendarPgComponent },
  { path: "comparison", component: ComparisonComponent },
  { path: "time-converter", component: TimeConverterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
