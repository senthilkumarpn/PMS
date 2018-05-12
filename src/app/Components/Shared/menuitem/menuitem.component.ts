import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { INavItem  } from '../INavItem';
@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {
  @Input() items: INavItem[];
  @ViewChild('childMenu') public childMenu;
  constructor(public router: Router) { }

  ngOnInit() {
  }

}
