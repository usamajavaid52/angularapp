import { Component, OnInit } from "@angular/core";

@Component({
  selector: "map",
  templateUrl: "./map.component.html"
  //styleUrls: ['./body.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 32;
  lng: number = 74;

  constructor() {}

  ngOnInit() {}
}
