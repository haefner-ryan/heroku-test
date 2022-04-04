import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as localforage from 'localforage';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  dataArray: any = [];
  tableShown = false;
  subscription!: Subscription;

  constructor(private dataService: DataService) {}

  async ngOnInit() {
    this.dataArray = await this.dataService.getData();
    if (this.dataArray === null) {
      localforage.setItem('data', []);
      this.dataArray = [];
    }
    console.log(this.dataArray);

    this.subscription = this.dataService.dataChanged.subscribe((dataArray) => {
      this.dataArray = dataArray;
    });
  }

  onShowTable() {
    this.tableShown = !this.tableShown;
  }

  onClearStorageData() {
    this.dataService.clearData();
    this.dataArray = [];
  }
}
