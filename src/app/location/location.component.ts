import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(res => {
      console.log(res)
    })
  }

  onClick() {
    console.log('log')
  }

}
