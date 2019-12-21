import { Component } from '@angular/core';
import {Map} from 'leaflet';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  private map: Map;
  private zoom: number;
  
  receiveMap(map: Map) {
    this.map = map;
  }

  receiveZoom(zoom: number) {
    this.zoom = zoom;
  }
}
