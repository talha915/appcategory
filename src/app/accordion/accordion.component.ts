import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../myservices.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  message: any;
  subscription: Subscription;
  Clothes: Array<any>;
  Asscessories: Array<any>;
  constructor(private myservice: MyservicesService) { 
    this.subscription = this.myservice.getClothes().subscribe(message => { 
      this.message = message;
      this.Clothes = this.message.text;
      console.log("message",this.message.text)
    });
    console.log("Subscription", this.subscription)

    this.subscription = this.myservice.getAsscessories().subscribe(message =>{
      this.message = message;
      this.Asscessories = this.message.text;
    });
  }

  ngOnInit() {
   // const data = this.myservice.getClothes();
   // console.log("X", data);
    console.log("Clothes.....", this.Clothes);
   
  }

}
