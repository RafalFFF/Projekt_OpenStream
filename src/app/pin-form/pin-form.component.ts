import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-pin-form',
  templateUrl: './pin-form.component.html',
  styleUrls: ['./pin-form.component.css']
})
export class PinFormComponent implements OnInit {

  pinFormModel: FormGroup;
  isActive:boolean = true;
 

  @Output() 
  newItemEvent = new EventEmitter<object>();


  constructor() {
    this.pinFormModel = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl(''),
      averageFlow: new FormControl(0,Validators.required),
    })
  }


  // showMenu():void{
  //   document.getElementById('pinForm')?.classList.toggle('pinFormActive');
  // }

  toggleSidebar(){
    console.log("Bef" + this.isActive)
    this.isActive = !this.isActive;
    console.log("Aft" + this.isActive)
  }


  ngOnInit(): void {

  }

  onSubmit(): void {
    let newDrawningPin = this.pinFormModel.value;
    this.newItemEvent.emit(newDrawningPin);
    this.pinFormModel.reset();
  }
}
