import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {OsmMapComponent} from "./osm-map/osm-map.component"
import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, LeafletModule ],
  declarations: [ AppComponent, OsmMapComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
