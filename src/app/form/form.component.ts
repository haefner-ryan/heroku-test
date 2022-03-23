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

  constructor(private dataService: DataService) { }
  
  ngOnInit(): void {
  }
  
  async onSubmitForm() {
    this.dataService.setData(this.formInfo);

    this.formInfo = ({
      jobName: '',
      jobTimeLength: 0,
      jobDifficulty: ''
    })
  }

}
