import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() message = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  send(feature) {
    this.message.emit(feature);
  }
}
