import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Map, marker, tileLayer}from 'leaflet';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {
 
  title = 'frontend';

  ngAfterViewInit():void{
  const map= new Map('map').setView([35.6414,139.7803], 13);
  tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const markerItem = marker([51.5, -0.09]).addTo(map).bindPopup("Londres Marcador");

   map.fitBounds([
     [markerItem.getLatLng().lat,markerItem.getLatLng().lng]
   ]);

}

}
