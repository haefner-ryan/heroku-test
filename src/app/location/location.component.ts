import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  number: number = 0;
  lat!: number;
  long!: number;

  updatedLat!: number;
  updatedLong!: number;

  constructor() { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(res => {
      console.log(res)
      this.lat = res.coords.latitude;
      this.long = res.coords.longitude;
    })
    navigator.geolocation.watchPosition(res => {
      console.log(res);
      this.updatedLat = res.coords.latitude;
      this.updatedLong = res.coords.longitude;
    })
  }

  onClick() {
    console.log('log')
    this.number++;
  }

}
