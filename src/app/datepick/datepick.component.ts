import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepick',
  templateUrl: './datepick.component.html',
  styleUrls: ['./datepick.component.css']
})
export class DatepickComponent implements OnInit {

  date: Date = new Date();
	settings = {
		bigBanner: true,
		timePicker: false,
		format: 'MM-dd-yyyy',
		defaultOpen: true
	}
  constructor() { 
    console.log("Date.....",this.date);
  }

  ngOnInit() {
  }

}
