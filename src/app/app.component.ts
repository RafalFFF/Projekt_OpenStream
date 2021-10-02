import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pins = new Array();
  tempObj = new Object();
  pushNewPinFlag = new Boolean(false);

  connectInformation(obj1:object,obj2:object):object{
    let newObject =Object.assign(obj1,obj2);
    return newObject;
  }

  addCord(cord:object):void{
    if(this.pushNewPinFlag){
      
      let temp = this.connectInformation(this.tempObj,cord);
      this.pins.push(temp);
      console.log(temp)
      this.pushNewPinFlag=false;
    }
  }

  addNewItem(pin:object):void{
    this.tempObj=pin;

    this.pushNewPinFlag=true;
  }
  
  title = 'Przepływomierz';
}
