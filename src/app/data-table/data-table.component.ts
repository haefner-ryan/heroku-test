import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as localforage from 'localforage';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, AfterViewInit {
  dataArray: any = [];
  tableShown = false;
  subscription!: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscription = this.dataService.dataChanged
      .subscribe((dataArray) => {
        this.dataArray = dataArray
      })
  }

  async ngAfterViewInit() {
    this.dataArray = await this.dataService.getData();
    console.log(this.dataArray)
  }

  onShowTable() {
    this.tableShown = !this.tableShown;  
  }

  onClearStorageData() {
    this.dataService.clearData();
    // localforage.setItem('data', [])
    this.dataArray = [];
  }

}
