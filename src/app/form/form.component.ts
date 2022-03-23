import { Component, OnInit } from '@angular/core';
import * as localforage from 'localforage';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formInfo = ({
    jobName: '',
    jobTimeLength: 0,
    jobDifficulty: ''
  })
  temp: any;
  dataArray = [{jobName: 'asdfasdfasdf', jobTimeLength: 3, jobDifficulty: 'Medium'}];

  constructor(private dataService: DataService) { }
  
  ngOnInit(): void {
  }
  
  async onSubmitForm() {
    this.dataService.setData(this.formInfo);

    await localforage.getItem('data', (err, value) => {
      // console.log(value)
      this.temp = value
    })

    this.temp.push(this.formInfo)
    localforage.setItem('data', this.temp);

    this.temp = null;
  }

}
