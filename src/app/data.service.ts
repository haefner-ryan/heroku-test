import { Injectable } from '@angular/core';
import * as localforage from 'localforage';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any[] = [
    {jobName: 'asdfasdfasdf', jobTimeLength: 3, jobDifficulty: 'Medium'}
  ];
  temp: any;
  constructor() { }

  async getData() {
      
    await localforage.getItem('data', (err, value) => {
      this.temp = value
    })
    return this.temp
  }

  setData(newJob: any){
    this.data.push(newJob)
    console.log(this.data)
    localforage.setItem('data', this.data)
  }
  
  clearData() {
    localforage.setItem('data', []);
    this.data = [];
    console.log(this.data)
  }
}
