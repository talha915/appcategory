import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asscessories',
  templateUrl: './asscessories.component.html',
  styleUrls: ['./asscessories.component.css']
})
export class AsscessoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  asscessories = [{
    name: 'Mobile'
  }];
  Addasscessories: Array<any> = this.asscessories;

  addAsscessories(newasscessories){
    var newData = {
      name: newasscessories
    };
    this.asscessories.push(newData);
  }
}
