import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../myservices.service';
import { Subscription } from 'rxjs';
import { DatepickComponent } from '../datepick/datepick.component';
import * as moment from 'moment';
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  date1: Date;
  date: Date = new Date();
	settings = {
		bigBanner: false,
		timePicker: false,
		format: 'dd-MM-yyyy',
		defaultOpen: false
	}
  
  
  message: any;
  nextDay: Date;
  subscription: Subscription;
  Clothes: Array<any>;
  reqDate: any;
  Asscessories: Array<any>;

  constructor(private myservice: MyservicesService) { 
    // this.nextDay = new Date();
    // console.log("this.nextDay", this.nextDay.getDate(),this.nextDay.getMonth()+1, this.nextDay.getFullYear());
    // this.reqDate = (this.nextDay.getDate())+" "+(this.nextDay.getMonth()+1)+" "+this.nextDay.getFullYear();
    // console.log("Req Date", this.reqDate);
    // this.nextDay.setDate(this.nextDay.getDate() + 1);
    this.date = this.date;

    this.subscription = this.myservice.getClothes().subscribe(message => { 
      this.message = message;
      this.Clothes = this.message.text;
      console.log("message",this.message.text)
      console.log("this.CLothes", this.message.text)
    });
    console.log("Subscription", this.subscription)

    this.subscription = this.myservice.getAsscessories().subscribe(message =>{
      this.message = message;
      this.Asscessories = this.message.text;
    });
  }


  clothes = [
    {
      name: 'Shirts',
      date: '10/7/2018'
    }
  ];
  Addclothes: Array <any> = this.clothes;
  addclothes(newClothes, newDate){
    console.log('newDate', newDate.getDate());
    console.log("Clothes", this.clothes);
    newDate = moment(newDate, "DD-MM-YYYY").format('DD/MM/YYYY')
    var newData1 = {
      name: newClothes,   
      date: newDate
    };
    
    this.clothes.push(newData1);
    
    console.log("Clothes", this.clothes);
    // debugger;
    this.myservice.setClothes(this.clothes);
  }


  asscessories = [
    {
      name: 'Mobile',
      date: '10/7/2018'
    }
  ];
  Addasscessories: Array <any> = this.asscessories;
  addAsscessories(newAsscess,newDate){
    console.log("Asscess", this.asscessories);
    newDate = moment(newDate, "DD-MM-YYYY").format('DD/MM/YYYY')
    var newData2 = {
      name: newAsscess,
      date: newDate
    };
    this.asscessories.push(newData2);
    console.log("Asscess", this.asscessories);
    this.myservice.setAsscessories(this.asscessories);
  }

  ngOnInit() {
   // const data = this.myservice.getClothes();
   // console.log("X", data);
    console.log("Clothes.....", this.Clothes);
   
  }

}
