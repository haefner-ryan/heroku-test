import { Injectable } from '@angular/core';
import * as localforage from 'localforage';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataChanged = new Subject<any[]>();
  data: any[] = [];
  temp: any;
  constructor() { }

  async getData() {
      
    await localforage.getItem('data', (err, value) => {
      this.temp = value
    })
      this.data = this.temp
    return this.temp
  }

  setData(newJob: any){
    this.data.push(newJob)
    console.log(this.data)
    localforage.setItem('data', this.data)
    this.dataChanged.next(this.data.slice())
  }
  
  clearData() {
    localforage.setItem('data', []);
    this.data = [];
    console.log(this.data)
  }
}
