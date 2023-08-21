import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from './shared_pipes/date.pipe';
import { CalendarComponent } from './shared_components/calendar/calendar.component';
import { TimeConverterComponent } from './views/time-converter/time-converter.component';
import { ComparisonComponent } from './views/comparison/comparison.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { HighlitediffDirective } from './shared-directives/highlitediff.directive';
import {MatInputModule} from '@angular/material/input';
import { CalendarPgComponent } from './views/calendar-pg/calendar-pg.component';


@NgModule({
  declarations: [
    AppComponent,
    DatePipe,
    CalendarComponent,
    TimeConverterComponent,
    ComparisonComponent,
    HighlitediffDirective,
    CalendarPgComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatButtonToggleModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
