import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  public message1="";
  @Output() public childEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  public forward(value)
  {
    this.message1 = value.toString();
    this.childEvent.emit(this.message1);
  }

}
