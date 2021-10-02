import { Component, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { LeafletMouseEvent } from 'leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  newX: Number;
  newY:Number;
  sendnewCordinations : Object;

  @Input()
  markers = new Array();
  
  @Input()
  temporaryFlag = new Boolean();

  @Output() 
  newCord = new EventEmitter<object>();

  constructor() { 
    this.newX = new Number();
    this.newY = new Number();
    this.sendnewCordinations = new Object({});
  }
  
  private initMap():void{
    let map = new L.Map('map').setView([49.664834916848264, 21.979140478864],15);
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  	maxZoom: 19,
  });


  map.on('click', (e)=>{
    if(this.temporaryFlag){
      let newXCordination = (e as LeafletMouseEvent).latlng.lat;
      let newYCordination = (e as LeafletMouseEvent).latlng.lng;
  
      this.newX=newXCordination;
      this.newY=newYCordination;
      
      this.sendnewCordinations={x:this.newX,y:this.newY}
          
      let greeyIcon = L.icon({
        iconUrl:'assets/icons/greey.png',
        iconSize:[24,24],
      });

      let greenIcon = L.icon({
        iconUrl:'assets/icons/green.png',
        iconSize:[24,24],
      });
      let blackIcon = L.icon({
        iconUrl:'assets/icons/black.png',
        iconSize:[24,24],
      });

      let purpleIcon = L.icon({
        iconUrl:'assets/icons/purple.png',
        iconSize:[24,24],
      });

      let darkBlueIcon = L.icon({
        iconUrl:'assets/icons/darkBlue.png',
        iconSize:[24,24],
      });

      let orangeIcon = L.icon({
        iconUrl:'assets/icons/orange.png',
        iconSize:[24,24],
      });
      let brownIcon = L.icon({
        iconUrl:'assets/icons/brown.png',
        iconSize:[24,24],
      });
      let blueIcon = L.icon({
        iconUrl:'assets/icons/blue.png',
        iconSize:[24,24],
      });

      this.newCord.emit(this.sendnewCordinations);
      console.log(this.markers)
       this.markers.map(item=>{
        let icon;
      
          switch (item.type) {
            case "Przepływ Nieznany":
              icon=greeyIcon;
              break;
              case "Przepływ - SUW/ZUW":
                icon=greenIcon;
              break;
              case "Przepływ - zbiornik":
                icon=orangeIcon;
              break;
              case "Przepływ międzystrefowy":
                icon=darkBlueIcon;
              break;
              case "Sprzedaż - Online":
                icon=blueIcon;
              break;
              case "Sprzedaż - odczyt co 12h":
                icon=purpleIcon;
              break;
              case "Sprzedaż - odczyt ręczny":
                icon=brownIcon;
              break;
              case "Przepływ wirtualny":
                icon=blackIcon;
              break;
          
            default:
              break;
          }
          let temp =new L.Marker([item.x,item.y],{icon:icon});
          temp.bindTooltip(item.name);
          temp.addTo(map);
       })
      }
  })
    tiles.addTo(map);
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.temporaryFlag=false;
  }
}