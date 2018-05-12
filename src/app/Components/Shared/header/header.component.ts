import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   ApplicationName = 'PMS';
  constructor() { }
  ngOnInit() {}
}
