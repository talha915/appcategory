import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Categories", this.categories);
    console.log("Clothes", this.clothes);
    console.log("Asscessories", this.asscessories);
  }
  categories = [
    {
      name: 'Clothes',
    },
    {
      name: 'Asscessories'
    },
  ];
  Addcategory: Array<any> = this.categories;
  addCategory(newCategory){
    var newData = {
      name: newCategory
    };
    this.categories.push(newData);
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
  }
}
