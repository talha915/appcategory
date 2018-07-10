import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { MomentModule } from 'angular2-moment';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { AccordionComponent } from './accordion/accordion.component';
import { DatepickComponent } from './datepick/datepick.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    AccordionComponent,
    DatepickComponent
  ],
  imports: [
    BrowserModule,
    MomentModule,
    AngularDateTimePickerModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
