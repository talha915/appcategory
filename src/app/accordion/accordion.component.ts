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
      name: 'Shirts'
    }
  ];
  Addclothes: Array <any> = this.clothes;
  addclothes(newClothes){
    console.log("Clothes", this.clothes);
    var newData1 = {
      name: newClothes
    };
    this.clothes.push(newData1);
    
    console.log("Clothes", this.clothes);
    // debugger;
    this.myservice.setClothes(this.clothes);
  }


  asscessories = [
    {
      name: 'Mobile'
    }
  ];
  Addasscessories: Array <any> = this.asscessories;
  addAsscessories(newAsscess){
    console.log("Asscess", this.asscessories);
    var newData2 = {
      name: newAsscess
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
