import { Component, ViewChild, ElementRef, Directive, OnInit } from '@angular/core';
declare var Cesium;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('map', null) mapContainer: ElementRef;
  constructor() { }
  ngOnInit() {
    const viewer = new Cesium.Viewer(this.mapContainer.nativeElement);
  }
}
