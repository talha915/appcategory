import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyservicesService {
  private subject = new Subject<any>();
  private data: Array<any>;
  constructor() { }

  // setClothes(data){
  //   this.data = data;
  //   console.log("Set Data", this.data);
  // }

  // getClothes(){
  //   return this.data;
  // }
  
  setClothes(data: Array<any>){
    this.subject.next({text: data});
  }
 
  getClothes(): Observable<any>{
    return this.subject.asObservable();
  }

  setAsscessories(data: Array<any>){
    this.subject.next({text: data});
  }

  getAsscessories(): Observable<any>{
    return this.subject.asObservable();
  }
}
