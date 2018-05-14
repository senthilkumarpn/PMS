import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   ApplicationName = 'PMS';
   @Input() private sidenavRef: MatSidenav;
  constructor() { }
  ngOnInit() {}
}
