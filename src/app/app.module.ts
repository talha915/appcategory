import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
